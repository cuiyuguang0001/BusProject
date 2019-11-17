/**
 * layui数据表格
 * 站点信息
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
    url: user.defaultUrl + myurl.bus_stationList,
    toolbar: '#toolbarDemo',
    where:{'state':1},
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
        {field: 'id',        title: 'ID', sort: true, align: 'center', fixed: true}
        , {field: 'busName',      title: '车名 ', align: 'center'}
        , {field: 'pointOne',   title: '坐标点1', align: 'center'}
        , {field: 'pointTwo',     title: '坐标点2', align: 'center'}
        , {field: 'state',title: '状态', width:'16%', align: 'center', templet: '#manager_state'}
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
    }
});
/**
 * 监听
 */
table.on('tool(driverData)', function(obj) {
    var data = obj.data;
    if (obj.event === 'selectRoad') {
        layer.open({
            type: 2,
            title:'查看地图规划',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['100%', '100%'],
            content: 'Bus_WaySelect.html?startPoint=' + data.pointOne + '&endPoint=' + data.pointTwo,
        })
    }
});