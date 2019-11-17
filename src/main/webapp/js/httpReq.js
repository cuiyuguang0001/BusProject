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
    //uploadorder表
    bus_uploadorderList:'/bus_uploadorder/list',
    bus_uploadorderAdd: '/bus_uploadorder/add',
    bus_uploadorderEdit:'/bus_uploadorder/edit',
    //bus_driver表
    bus_driverList:'/bus_driver/list',
    bus_driverAdd:'/bus_driver/add',
    bus_driverEdit:'/bus_driver/edit',
    bus_driverDel:'/bus_driver/del',
    //bus_jsz表
    bus_jszList:'/bus_jsz/list',
    Bus_jszEdit:'/bus_jsz/edit',
    Bus_jszAdd:'/bus_jsz/add',
    Bus_jszDel:'/bus_jsz/del',
    //bug_log表
    bug_logList:'/bug_log/list',
    bug_logAdd:'/bug_log/add',
    bug_logDel:'/bug_log/del',


}
var req = {
    post: function (url,data,async,msg = true) {
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
                if(msg){
                    layer.msg(r.msg)
                }
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
                        "<div class='layui-input-block '>\n" +
                        "<input type='"+ data[key].type +"' id='"+  myId +"' name='" + key + "' " +
                        "lay-verify='"+ data[key].verify +"' autocomplete='off' "+ (data[key].verify == "required" ? "required" : "") +"\n" +
                        "class='layui-input'/>" +
                        "</div>\n" + "</div>\n")
                    break;
                }
                case 'radio':{
                    $('#' + data.form).append("<div class='layui-form-item'>\n" +
                        "<label class='layui-form-label'>"+ data[key].title +"</label>\n" +
                        "<div class='layui-input-block'  id='"+  myId +"'>\n" +
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
                        "<div class='layui-input-block '>\n" +
                        "<select id='"+  myId +"' name='" + key + "' lay-verify='" + data[key].verify + "'></select>" +
                        "</div>\n" + "</div>\n")
                    for(let key2 in data[key].data)
                    {
                        $('#' + myId).append("<option value='" + key2 + "'>" + data[key].data[key2] + "</option>")

                    }
                    break;
                }
                case 'textarea':{
                    $('#' + data.form).append("<div class='layui-form-item'>\n" +
                        "<label class='layui-form-label'>"+ data[key].title +"</label>\n" +
                        "<div class='layui-input-block '>\n" +
                        "<textarea id='"+  myId +"' name='" + key + "' lay-verify='" + data[key].verify + "'  class='layui-textarea'></textarea>" +
                        "</div>\n" + "</div>\n")
                    break;
                }
            }
            $('#' + myId).addClass(data[key].class)
            if(data[key].disable == true)
                $('#' + myId).attr('disabled', "")
        }

        if(data.button != null)
        {
            $('#' + data.form).append("<div id='button_"+ data.form +"' class='layui-btn-container' style='margin-top:30px'>\n" +
                "</div>")
            for(let i = 0; i < data.button.length; i++)
            {
                console.log(data.button[i].buttonFilter)
                //id='"+ data.button[i].id +"'
                $('#button_' + data.form).append("<button class='layui-btn "+ (data.button[i].class == 'undefined' ? '' : data.button[i].class) +"' "+ (data.button[i].submit==true||null?'lay-submit':'') +" lay-filter='" + data.button[i].buttonFilter + "'>" + data.button[i].buttonName + "</button>\n")
            }
        }


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
    initSelect: (url, param, id) =>{
        $("#" + id).empty()
        let data = req.post(url,param == null ? {req:'no'} : param,false, false)
        for(let i = 0; i < data.data.length; i++)
        {
            $("#" + id).append("<option value = '"+ data.data[i].name +"'>"+ data.data[i].name +"</option>")
        }
        form.render()
    }
}
