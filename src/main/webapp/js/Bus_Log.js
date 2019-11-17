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
    url: user.defaultUrl + myurl.bug_logList,
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
        , {field: 'name',      title: '姓名 ',width:'12%', align: 'center'}
        , {field: 'busName',   title: '车名', width:'10%', align: 'center'}
        , {field: 'title',     title: '标题', align: 'center'}
        , {field: 'createDate',title: '添加日期', width:'16%', align: 'center'}
        , {field: 'text',     title: '日志内容',align: 'center', templet: '#manager_state'}
        , {fixed: 'right',     title: '操作',width:'20%', toolbar: '#barDemo',  align: 'center'}
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
         * 查看信息
         */
        common.form({
            form: 'selectLog',
            title:{
                title:'标题',
                type:'text',
                disable:true,
            },createDate:{
                title:'创建时间',
                type:'text',
                disable:true,
            },text:{
                title:'日志内容',
                type:'textarea',
                disable:true,

            },
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
            req.post(myurl.bug_logDel, {id: data.id} , false)
            layer.close(index);
            table.reload('driverData');
        });
    }else if(obj.event === 'selectLog'){
        form.val('selectLog',{
            id: data.id,
            name: data.name,
            busName: data.busName,
            createDate: data.createDate,
            title: data.title,
            text: data.text,
        });
        index = layer.open({
            type: 1,
            title: '车辆信息',
            closeBtn: false,
            shade: 0.5,
            id: 'busUpdate', //设定一个id，防止重复弹出,
            btn:['确认信息'],
            btn1:function(index, layero){
                layer.close(index);
                $(".selectLog").css("display", "none");
                return false;
            },
            btnAlign: 'c',
            area: ['100%', '100%'],
            content: $(".selectLog").append(),
        });
    }
})
