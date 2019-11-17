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
    url: user.defaultUrl + myurl.bus_jszList,
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
        , {field: 'busname',     title: '车主姓名 ',width:'12%', align: 'center'}
        , {field: 'sex',      title: '姓名', width:'10%', align: 'center'}
        , {field: 'card',      title: '身份证号', width:'16%', align: 'center'}
        , {field: 'address', title: '家庭地址', align: 'center'}
        , {field: 'firsttime',     title: '领证日期', align: 'center'}
        , {fixed: 'right',    title: '操作', toolbar: '#barDemo',  align: 'center'}
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
                title:'姓名',
                type:'text',
                verify:'required',
            }, sex:{
                title:'性别',
                type:'radio',
                verify:'required',
                value:['男','女'],
                radioTitle:['男','女']
            },card:{
                title:'身份证',
                type:'text',
                verify:'number'
            },address:{
                title:'家庭住址',
                type:'text',
                verify:'required'
            },firsttime:{
                title:'出生日期',
                type:'text',
                verify:'date'
            },button:[{
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
            }, busname:{
                title:'车主姓名',
                type:'text',
                verify:'required'
            }, sex:{
                title:'性别',
                type:'radio',
                verify:'required',
                value:['男','女'],
                radioTitle:['男','女']
            }, card:{
                title:'身份证号',
                type:'text',
                verify:'required',
                class:'layui-btn-disabled',
                disable:true,
            },address:{
                title:'家庭住址',
                type:'text',
                verify:'',
            },firsttime:{
                title:'领证日期',
                type:'text',
                verify:'required',
            },button:[{
                buttonFilter:'submit',
                buttonName:'立即修改',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
        /**
         * 日起渲染
         */

        laydate.render({
            elem: '#update_firsttime', //指定元素

        });
        /**
         * 日起渲染
         */
        laydate.render({
            elem: '#insert_firsttime', //指定元素

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
            req.post(myurl.Bus_jszDel, {id: data.id} , false)
            layer.close(index);
            table.reload('driverData');
        });
    }else if(obj.event === 'update'){
        form.val('update',{
            id: data.id,
            busname: data.busname,
            sex: data.sex,
            card: data.card,
            address: data.address,
            firsttime: data.firsttime,
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
    req.post(myurl.Bus_jszAdd, form.val('insert'), false);
    $(".insert").css("display", "none");
    table.reload('driverData');
    return false;
})
/**
 * 一键修改
 */
form.on('submit(update)', function (data) {
    req.post(myurl.Bus_jszEdit, form.val('update'), false);
    layer.close(index);
    $(".update").css("display", "none");
    table.reload('driverData');
    return false;
})