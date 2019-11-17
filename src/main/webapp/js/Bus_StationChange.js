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
    where:{'state':0},
    url: user.defaultUrl + myurl.bus_stationList,
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
    id: 'driverData',
    page: true,
    limit: 8,
    limits: [7, 10, 15],
    cols: [[
        {field: 'id',         width: '6%', title: 'ID', sort: true, align: 'center', fixed: true}
        , {field: 'busName',   title: '车名', width:'10%', align: 'center'}
        , {field: 'pointOne',     title: '坐标点1', align: 'center'}
        , {field: 'pointTwo',title: '坐标点2', width:'16%', align: 'center'}
        , {field: 'state',     title: '状态申请',align: 'center', templet: '#manager_state'}
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
    }
});
/**
 * 监听
 */
table.on('tool(driverData)', function(obj){
    var data = obj.data;
    if(obj.event === 'Yes'){
        data.state = 1
        layer.confirm('确认规划吗', function(index){
            req.post(myurl.bus_stationEdit, data , false)
            layer.close(index);
            table.reload('driverData');
        });
    }else if(obj.event === 'No'){
        layer.confirm('确认拒绝吗', function(index){
            req.post(myurl.bus_stationEdit, {id:data.id, state: 2} , false)
            layer.close(index);
            table.reload('driverData');
        });
    }
})

function insert(){
    layer.open({
        type: 2,
        title:'查看地图规划',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['100%', '100%'],
        content: 'Bus_Way.html?name=add',
        cancel: function(index, layero) {
            layer.close(index);
            table.reload('driverData')
        }
    })
}
