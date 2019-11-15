document.write("<script src=\"../assets/layui/layui.all.js\"></script>");
document.write("<script language=javascript src='../jQuery/jquery-3.4.1.min.js'></script>");
document.write("<link rel=\"stylesheet\" href=\"../assets/layui/css/layui.css\">");

var user = {
    defaultUrl:'http://localhost:9010'
}

var myurl = {
    //user表操作
    userList: '/bus_user/list',//模糊查询参数 name(传不传都行)
    userAdd: '/bus_user/add',//添加 参数 name,age,sex,sal,post
    userEdit: '/bus_user/edit',//修改 参数 id name age sex sal post
    userDel: '/bus_user/del',//删除 参数 id
    //job表
    jobList: '/bus_job/list',
    jobAdd: '/bus_job/add',
    jobEdit: '/bus_job/edit',
    jobDel: '/bus_job/del',
    //bus表
    bus_busList: '/bus_bus/list',
    bus_busAdd: '/bus_bus/add',
    bus_busEdit: '/bus_bus/edit',
    bus_busDel: '/bus_bus/del/',

}

var req = {
    post: function (url,data,async) {
        r = null;
        $.ajax({
            url: user.defaultUrl + url,
            type: 'POST',
            data: JSON.stringify(data),
            // data: data,
            dataType: 'json',
            contentType: 'application/json',
            async: async == null ? false : async,
            success: function(data){
                r = data;
            }
        })
        return r;
    }
}

var common = {
    //text语法
    //id(id标识名):{
    //      title:该行的名字
    //      type:text，
    //      verify:lay-verify的值，如果是required就是必填项
    // }

    //radio语法
    //id(id标识名):{
    //      title:该行的名字,
    //      type:radio
    //      value:[]数组，与radioTitle一一对应
    //      radioTitle:[]数组，与value一一对应
    // }

    //select语法
    //id(id标识名):{
    //      title:该行的名字,
    //      type:select
    //      data:{}json key(显示的行)-value(option中value的值)
    //      radioTitle:[]数组，与value一一对应
    //      verify:lay-verify的值，如果是required就是必填项
    // }
    form: data => {
        $('#' + data.form).empty()
        for(let key in data)
        {
            let myId = data.form + "_" + key
            switch (data[key].type) {
                case 'text':{
                    $('#' + data.form).append("<div class='layui-form-item'>\n" +
                        "<label class='layui-form-label'>"+ data[key].title +"</label>\n" +
                        "<div class='layui-input-inline '>\n" +
                        "<input type='"+ data[key].type +"' id='"+  myId +"' name='" + key + "' " +
                        "lay-verify='"+ data[key].verify +"' autocomplete='off' "+ (data[key].verify == "required" ? "required" : "") +"\n" +
                        "class='layui-input'/>" +
                        "</div>\n" + "</div>\n")
                    break;
                }
                case 'radio':{
                    $('#' + data.form).append("<div class='layui-form-item'>\n" +
                        "<label class='layui-form-label'>"+ data[key].title +"</label>\n" +
                        "<div class='layui-input-block' id='"+  myId +"'>\n" +
                        "</div>\n" + "</div>\n")
                    for(let i = 0; i < data[key].value.length; i++)
                    {
                        $('#'+  myId).append("<input type='"+ data[key].type +"' name='" + key + "' value='"+ data[key].value[i] +"' id='"+  data.form + "_" + key +"' title='" + data[key].radioTitle[i] + "'/>\n")
                    }
                    break;
                }
                case 'select':{
                    $('#' + data.form).append("<div class='layui-form-item'>\n" +
                        "<label class='layui-form-label'>"+ data[key].title +"</label>\n" +
                        "<div class='layui-input-inline '>\n" +
                        "<select id='"+  myId +"' name='" + key + "' lay-verify='" + data[key].verify + "'></select>" +
                        "</div>\n" + "</div>\n")
                    for(let key2 in data[key].data)
                    {
                        $('#' + myId).append("<option value='" + key2 + "'>" + data[key].data[key2] + "</option>")

                    }
                    break;
                }
            }
            $('#' + myId).addClass(data[key].class)
            if(data[key].disable == true)
                $('#' + myId).attr('disabled', "")
        }


        // $('#' + data.form).append("<div class='layui-form-item'>\n" +
//         //     "<button id='Yes' style='position: absolute; margin-left:80px; margin-bottom: 15px;' class='layui-btn' lay-submit \n" +
//         //     "lay-filter='" + data.button.submitFilter + "' onclick='" + data.button.submitClick + "'>" + data.button.submit + "</button>\n" +
//         //     "<button id='No' type='button' style='position: absolute; margin-left:360px; margin-bottom: 15px; background:red' class='layui-btn' onclick='" + data.button.backClick + "'>" + data.button.back + "</button>\n" +
//         //     "</div>")
        form.render()
    },

    reload:(id, data) => {
        table.reload(id, {
            page:{
                curr:1
            },
            where:data,
        })
    },
    initSelect: (url, data, id) =>{
        $("#" + id).empty()
        var data = req.post(url,data,false)
        for(let i = 0; i < data.data.length; i++)
        {
            $("#" + id).append("<option value = '"+ data.data[i].name +"'>"+ data.data[i].name +"</option>")
        }
        form.render()
    }
}
