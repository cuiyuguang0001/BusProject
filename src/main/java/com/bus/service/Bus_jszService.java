package com.bus.service;

import com.bus.mapper.Bus_busMapper;
import com.bus.mapper.Bus_jszMapper;
import com.bus.pojo.Bus_jsz;
import com.bus.util.Constant;
import com.bus.util.PageUtil;
import com.bus.util.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class Bus_jszService {

    @Autowired
    Bus_jszMapper bus_jszMapper;

    public Map<String, Object> bus_jszList(Map<String, Object> map){
        PageUtil pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
        map.put("page", pageUtil);
        return new Request().ok(Constant.REQUEST_GOOD).okList(bus_jszMapper.bus_jszList(map), pageUtil.getCount());
    }

    public Map<String, Object> bus_jszAdd(Bus_jsz bus_jsz){
        if(!bus_jszMapper.bus_jszAdd(bus_jsz))
            return new Request().error(Constant.ERROR_MSG);
        return new Request().ok(Constant.REQUEST_GOOD);
    }

    public Map<String, Object> bus_jszEdit(Bus_jsz bus_jsz){
        if(!bus_jszMapper.bus_jszEdit(bus_jsz))
            return new Request().error(Constant.ERROR_MSG);
        return new Request().ok(Constant.REQUEST_GOOD);
    }

    public Map<String, Object> bus_jszDel(Bus_jsz bus_jsz){
        if(!bus_jszMapper.bus_jszDel(bus_jsz))
            return new Request().error(Constant.ERROR_MSG);
        return new Request().ok(Constant.REQUEST_GOOD);
    }

}
