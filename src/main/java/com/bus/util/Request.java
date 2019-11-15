package com.bus.util;

import java.util.HashMap;
import java.util.List;

public class Request extends HashMap<String, Object> {

    public Request(){
        put("code", 0);
        put("ref", Constant.REQUEST);
    }

    public Request ok(String msg){
        put("msg", msg);
        return this;
    }

    public Request okList(List list, int count){
        put("data", list);
        put("count", count);
        return this;
    }

    public Request error(String msg){
        put("msg", msg);
        put("ref", Constant.ERROR);
        return this;
    }

}
