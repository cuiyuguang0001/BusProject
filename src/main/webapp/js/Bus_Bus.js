/**
* layui数据表格
* 车辆信息
*/
var table = layui.table;
form = layui.form
var index = 0
/**
 * 方法级渲染
 */
table.render({
    method: 'post',
    elem: '#busData',
    contentType: 'application/json',
    dataType: 'json',
    loading: 'true',
    url: user.defaultUrl + myurl.bus_busList,
    toolbar: '#toolbarDemo',
    title: '用户数据表',
    totalRow: true,
    initSort: {
        field: 'id' //排序字段，对应 cols 设定的各字段名
        , type: 'asc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
    },
    text: {
        none: '小小数据去哪了？'
    },
    autoSort: 'true',
    // skin: 'nob',//是否显示行列渲染
    even: true,
    size: 'lg',
    id: 'busData',
    page: true,
    limit: 8,
    limits: [7, 10, 15],
    cols: [[
        {field: 'id', width: '10%', title: 'ID', sort: true, align: 'center', fixed: true}
        , {field: 'name', width: '12%', title: '车名 ', align: 'center'}
        , {field: 'norms', width: '12%', title: '型号', sort: true, align: 'center'}
        , {field: 'buyTime', width: '18%', title: '购买时间', align: 'center'}
        , {field: 'uploadTime', title: '最后维修时间', width: '18%', minWidth: 100, align: 'center'}
        , {field: 'state', title: '启用状态', width: '20%', align: 'center', templet:'#manager_state'}
        , {fixed: 'right', title: '操作', toolbar: '#barDemo',  align: 'center'}
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
         * 修改
         */
        common.form({
            form: 'update',
            id:{
                title:'ID',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            }, name:{
                title:'车名',
                type:'text',
                verify:'required'
            }, norms:{
                title:'型号',
                type:'text',
                verify:'required'
            }, buyTime:{
                title:'购买时间',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            },uploadTime:{
                title:'维修时间',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            },state:{
                title:'启用状态',
                type:'select',
                verify:'required',
                data:{
                    1: '已启用',
                    0: '未启用'
                },
            }, button:[{
                buttonFilter:'submit',
                buttonName:'立即修改',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
        /**
         * 添加
         */
        common.form({
            form: 'insert',
            name:{
                title:'车名',
                type:'text',
                verify:'required'
            }, norms:{
                title:'型号',
                type:'text',
                verify:'required'
            },button:[{
                buttonFilter:'submit',
                buttonName:'立即添加',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
    }
});
/**
* 监听行工具事件
*/
table.on('tool(busData)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
        layer.confirm('真的删除行么', function(index){
            req.post(myurl.bus_busDel, {id: data.id} , false)
            layer.close(index);
            table.reload('busData');
        });
    } else if(obj.event === 'update'){
        form.val('update',{
            id: data.id,
            name: data.name,
            norms: data.norms,
            buyTime: data.buyTime,
            joinDate: data.joinDate,
            uploadTime: data.uploadTime,
            state: data.state,
        });
        index = layer.open({
            type: 1,
            title: '车辆信息',
            closeBtn: false,
            shade: 0.5,
            id: 'busUpdate', //设定一个id，防止重复弹出,
            btn:['取消操作'],
            btn1:function(index, layero){
                layer.close(index);
                $(".update").css("display", "none");
                return false;
            },
            btnAlign: 'c',
            area: ['34%', '70%'],
            // cancel: function(index, layero) {
            //     layer.close(index);
            //     $(".update").css("display", "none");
            //     return false;
            // },
            content: $(".update").append(),
            // id: "alertcenterdiv",
        });
    }
})
function insert() {
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

/**
 * 一键添加
 */
form.on('submit(insert)', function(e){
    layer.closeAll();
    req.post(myurl.bus_busAdd, form.val('insert'), false);
    $(".insert").css("display", "none");
    table.reload('busData');
    return false;
})

/**
 * 一键修改
 */
form.on('submit(update)', function(e){
    req.post(myurl.bus_busEdit, form.val('update'), false);
    $(".update").css("display", "none");
    layer.close(index);
    table.reload('busData');
    return false;
})