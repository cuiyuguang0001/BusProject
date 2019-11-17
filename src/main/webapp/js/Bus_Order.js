/**
 * layui数据表格
 * 车辆审核
 */
var table = layui.table;
form = layui.form
var index = 0
/**
 * 方法级渲染
 */
table.render({
    method: 'post',
    elem: '#busType',
    contentType: 'application/json',
    dataType: 'json',
    loading: 'true',
    url: user.defaultUrl + myurl.bus_uploadorderList,
    toolbar: '#toolbarDemo',
    title: '用户数据表',
    totalRow: true,
    // initSort: {
    //     field: 'id' //排序字段，对应 cols 设定的各字段名
    //     , type: 'asc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
    // },
    text: {
        none: '小小数据去哪了？'
    },
    autoSort: 'true',
    // skin: 'nob',//是否显示行列渲染
    even: true,
    size: 'lg',
    id: 'busType',
    page: true,
    limit: 8,
    limits: [7, 10, 15],
    cols: [[
        {field: 'id', width: '12%', title: 'ID', sort: true, align: 'center', fixed: true}
        , {field: 'busname', width: '14%', title: '车名 ', align: 'center'}
        , {field: 'money', width: '14%', title: '金额', sort: true, align: 'center'}
        , {field: 'bdesc', width: '20%', title: '维修原因', align: 'center'}
        , {field: 'time', title: '时间', width: '20%', minWidth: 100, align: 'center'}
        , {field: 'state', title: '启用状态', align: 'center', templet: '#manager_state'}
    ]],
    /**
     * 回调函数
     * @param res
     * @param curr
     * @param count
     */
    done: function (res, curr, count) {
        console.log(res);
        /**
         * 添加
         */
        common.form({
            form: 'insert',
            busname:{
                title:'车名',
                type:'select',
                verify:'required',
                data:{

                },
            }, money:{
                title:'金额',
                type:'text',
                verify:'required'
            },bdesc:{
                title:'维修原因',
                type:'text',
                verify:'required'
            },button:[{
                buttonFilter:'submit',
                buttonName:'立即添加',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
    },
});
/**
 * 监听
 */
table.on('tool(busType)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
        layer.confirm('确认驳回么', function(index){
            req.post(myurl.bus_uploadorderEdit, {id: data.id, name: data.name, state: 2} , false)
            layer.close(index);
            table.reload('busType');
        });
    }else if(obj.event === 'update'){
        layer.confirm('确定通过么', function(index){
            req.post(myurl.bus_uploadorderEdit, {id: data.id, name: data.name, state: 1} , false)
            layer.close(index);
            table.reload('busType');
        });
    }
})

/**
 * 添加
 */
function insert() {
    common.initSelect(myurl.bus_busList, null, 'insert_busname')

    index = layer.open({
        type: 1,
        title: '车辆信息',
        closeBtn: false,
        shade: 0.5,
        id: 'YuanGongUpdate1', //设定一个id，防止重复弹出,
        btn:['取消操作'],
        btn1:function(index, layero){
            layer.close(index);
            $(".insert").css("display", "none");
            return false;
        },
        btnAlign: 'c',
        area: ['32%', '66%'],
        cancel: function(index, layero) {
            layer.close(index);
            $(".insert").css("display", "none");
            return false;
        },
        content: $(".insert").append(),
    });
}

form.on('submit(insert)', function (data) {
    req.post(myurl.bus_uploadorderAdd, form.val('insert'), false);
    layer.close(index);
    $(".insert").css("display", "none");
    table.reload('busType');
    return false;
})

