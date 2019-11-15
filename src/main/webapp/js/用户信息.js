/**
 * layui数据表格
 * 用户信息
 */
    table = layui.table;
    form = layui.form
    /**
     * 方法级渲染
     */
    table.render({
        method: 'post',
        elem: '#userData',
        contentType: 'application/json',
        dataType: 'json',
        loading: 'true',
        url: user.defaultUrl + myurl.userList,
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
        id: 'userData',
        page: true,
        limit: 8,
        limits: [7, 10, 15],
        cols: [[
            {field: 'id', width: '8%', title: 'ID', sort: true, align: 'center', fixed: true}
            , {field: 'name', width: '10%', title: '姓名', align: 'center'}
            , {field: 'age', width: '8%', title: '年龄', sort: true, align: 'center'}
            , {field: 'sex', width: '8%', title: '性别', align: 'center'}
            , {field: 'sal', title: '工资', width: '10%', minWidth: 100, align: 'center'}
            , {field: 'joinDate', width: '20%', title: '入职时间', sort: true, align: 'center'}
            , {field: 'job', title: '职业', align: 'center'}
            , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 150}
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
