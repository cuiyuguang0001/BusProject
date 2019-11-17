/**
* layui数据表格
* 用户信息
*/
var table = layui.table;
form = layui.form;
var index = 0;
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
        , {field: 'job', title: '职业', width: '20%', align: 'center'}
        , {field: 'joinDate', title: '入职时间', sort: true, align: 'center'}
        , {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 150, align: 'center'}
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
                title:'姓名',
                type:'text',
                verify:'required'
            }, age:{
                title:'年龄',
                type:'text',
                verify:'number'
            }, sex:{
                title:'性别',
                type:'radio',
                value:['男','女'],
                radioTitle:['男','女']
            },job:{
                title:'职位',
                type:'select',
                verify:'required',
                data:{
                },
            },sal:{
                title:'薪资',
                type:'text',
                verify:'number'
            },joinDate:{
                title:'入职时间',
                class:'layui-btn-disabled',
                disable:true,
                type:'text',
                verify:'required'
            },
            button:[{
                buttonFilter:'submit',
                submit:true,
                buttonName:'提交',
                class:'layui-btn-lg layui-btn-radius layui-btn-fluid',
            }]
        });
        /**
         * 添加
         */
        common.form({
            form: 'insert',
           name:{
                title:'姓名',
                type:'text',
                verify:'required'
            }, age:{
                title:'年龄',
                type:'text',
                verify:'number'
            }, sex:{
                title:'性别',
                type:'radio',
                verify:'required',
                value:['男','女'],
                radioTitle:['男','女']
            },job:{
                title:'职位',
                type:'select',
                verify:'required',
                data:{
                    董事长: '董事长',
                    员工: '员工',
                    经理: '经理',
                },
            },sal:{
                title:'薪资',
                type:'text',
                verify:'number'
            },
            button:[{
                buttonFilter:'submit',
                submit:true,
                class:'layui-btn-lg layui-btn-fluid layui-bg-orange',
                buttonName:'提交',
            }]
        });
        /**
         * 添加权限
         */
        common.form({
            form: 'qx',
            name:{
                title:'权限名称',
                type:'text',
                verify:'required',
            }, list:{
                title:'权限等级',
                type:'text',
                verify:'number',
            },
            button:[{
                buttonFilter:'submit',
                buttonName:'提交信息',
                class:'layui-btn-lg layui-btn-fluid',
                submit:true
            }]
        });
    }
});
/**
 * 监听行工具事件
 */
table.on('tool(userData)', function(obj){
    var data = obj.data;
    if(obj.event === 'del'){
        layer.confirm('真的删除行么', function(index){
            req.post(myurl.userDel, {id: data.id} , false)
            layer.close(index);
            table.reload('userData');
        });
    } else if(obj.event === 'update'){
        common.initSelect(myurl.jobList, null, 'update_job')
        form.val('update',{
            id: data.id,
            name: data.name,
            age: data.age,
            sex: data.sex,
            job: data.job,
            sal: data.sal,
            joinDate: data.joinDate
        });
        index = layer.open({
            type: 1,
            title: '用户信息',
            closeBtn: false,
            shade: 0.5,
            id: 'YuanGongUpdate', //设定一个id，防止重复弹出,
            btn:['取消操作'],
            btn1:function(index, layero){
                layer.close(index);
                $(".update").css("display", "none");
                return false;
            },
            btnAlign: 'c',
            area: ['33%', '80%'],
            cancel: function(index, layero) {
                layer.close(index);
                $(".update").css("display", "none");
                return false;
            },
            content: $(".update").append(),
            id: "alertcenterdiv",
        });
    }
})
function insert(){
    common.initSelect(myurl.jobList, null, 'insert_job')
    index = layer.open({
        type: 1,
        title: '用户信息',
        closeBtn: false,
        shade: 0.5,
        id: 'YuanGongUpdate1', //设定一个id，防止重复弹出,
        btn:['添加权限', '取消操作'],
        btn1:function(index, layero){
            tc();
            $(".insert").css("display", "none");
            layer.close(index);
            return false;
        },
        btn2:function(index, layero){
            layer.close(index);
            $(".insert").css("display", "none");
            return false;
        },
        btnAlign: 'c',
        area: ['36%', '96%'],
        cancel: function(index, layero) {
            layer.close(index);
            $(".insert").css("display", "none");
            return false;
        },
        content: $(".insert").append(),
    });
}


function tc(){
    index = layer.open({
        type: 1,
        title: '添加权限',
        closeBtn: false,
        shade: 0.5,
        id: 'YuanGongUpdate', //设定一个id，防止重复弹出,
        btnAlign: 'c',
        area: ['400px', '400px'],
        btn:['取消操作'],
        btn1: function(index, layero){
            $(".qx").css("display", "none");
            layer.close(index);
            return false;
        },
        content: $(".qx").append(),
    });
}

/**
 * 添加权限
 */
form.on('submit(qx)', function(data){
    req.post(myurl.jobAdd, form.val('qx'), false);
    $(".qx").css("display", "none");
    layer.close(index);
    table.reload('userData');
    return false;
})

/**
 * 一键添加
 */
form.on('submit(insert)', function(e){
    req.post(myurl.userAdd, form.val('insert'), false);
    $(".insert").css("display", "none");
    layer.close(index);
    table.reload('userData');
    return false;
})
/**
 * 一键修改
 */
form.on('submit(update)', function (data) {
    req.post(myurl.userEdit, form.val('update'), false);
    $(".update").css("display", "none");
    layer.close(index);
    table.reload('userData');
    return false;
})

