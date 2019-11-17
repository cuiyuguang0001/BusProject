/**
 * layui数据表格
 * 司机信息
 */
var laydate = layui.laydate;
var table = layui.table;
form = layui.form
var index = 0

/**
 * 方法级渲染
 */
table.render({
    method: 'post',
    elem: '#driverData',
    contentType: 'application/json',
    dataType: 'json',
    loading: 'true',
    url: user.defaultUrl + myurl.bus_driverList,
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
    id: 'driverData',
    page: true,
    limit: 8,
    limits: [7, 10, 15],
    cols: [[
        {field: 'id',         width: '6%', title: 'ID', sort: true, align: 'center', fixed: true}
        , {field: 'name',     title: '姓名 ',width:'12%', align: 'center'}
        , {field: 'age',      title: '年龄', width:'10%', align: 'center'}
        , {field: 'sfz',      title: '驾驶证号', width:'16%', align: 'center'}
        , {field: 'brithday', title: '出生日期', align: 'center'}
        , {field: 'time',     title: '添加日期', align: 'center'}
        , {field: 'state',    title: '审核状态',align: 'center', templet: '#manager_state'}
        , {fixed: 'right',    title: '操作',width:'20%', toolbar: '#barDemo',  align: 'center'}
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
            name:{
                title:'姓名',
                type:'text',
                verify:'required',
            }, age:{
                title:'年龄',
                type:'text',
                verify:'number'
            },sfz:{
                title:'驾驶证号',
                type:'text',
                verify:'number'
            },
            brithday:{
                title:'出生日期',
                type:'text',
                verify:'required'
            },
            button:[{
                buttonFilter:'submit',
                buttonName:'立即添加',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
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
                title:'姓名',
                type:'text',
                verify:'required'
            }, age:{
                title:'年龄',
                type:'text',
                verify:'required'
            }, sfz:{
                title:'驾驶证号',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            },brithday:{
                title:'出生日期',
                type:'text',
                verify:'',
            },time:{
                title:'添加日期',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            },state:{
                title:'启用状态',
                type:'select',
                verify:'required',
                data:{
                    1: '已封停',
                    0: '正常启用'
                },
            }, button:[{
                buttonFilter:'submit',
                buttonName:'立即修改',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
        /**
         * 添加日志
         */
        common.form({
            form: 'log',
            id:{
                title:'ID',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            }, name:{
                title:'车主姓名',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            }, busName:{
                title:'车名',
                type:'text',
                verify:'required'
            },title:{
                title:'标题',
                type:'text',
                verify:'required',
            },text:{
                title:'内容',
                type:'textarea',
                verify:'',
            },button:[{
                buttonFilter:'submit',
                buttonName:'添加日志',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
        /**
         * 日起渲染
         */

        laydate.render({
            elem: '#update_brithday', //指定元素

        });
        /**
         * 日起渲染
         */
        laydate.render({
            elem: '#insert_brithday', //指定元素

        });
    },
});
/**
 * 监听
 */
table.on('tool(driverData)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
        layer.confirm('确认删除吗', function(index){
            req.post(myurl.bus_driverDel, {id: data.id} , false)
            layer.close(index);
            table.reload('driverData');
        });
    }else if(obj.event === 'update'){
        form.val('update',{
            id: data.id,
            name: data.name,
            age: data.age,
            sfz: data.sfz,
            brithday: data.brithday,
            time: data.time,
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
            content: $(".update").append(),
        });
    } else if(obj.event === 'log'){
        form.val('log', {
            id: data.id,
            name: data.name
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
                $(".log").css("display", "none");
                return false;
            },
            btnAlign: 'c',
            area: ['100%', '100%'],
            content: $(".log").append(),
        });
    }
})

/**
 * 添加
 */
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
        content: $(".insert").append(),
    });
}

/**
 * 一键添加
 */
form.on('submit(insert)', function (data) {
    layer.closeAll();
    req.post(myurl.bus_driverAdd, form.val('insert'), false);
    $(".insert").css("display", "none");
    table.reload('driverData');
    return false;
})
/**
 * 一键修改
 */
form.on('submit(update)', function (data) {
    req.post(myurl.bus_driverEdit, form.val('update'), false);
    layer.close(index);
    $(".update").css("display", "none");
    table.reload('driverData');
    return false;
})
/**
 * 添加日志
 */
form.on('submit(log)', function (data) {
    req.post(myurl.bug_logAdd, form.val('log'), false);
    layer.close(index);
    $(".log").css("display", "none");
    return false;
})