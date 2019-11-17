package com.bus.controller;

import com.bus.pojo.Bus_jsz;
import com.bus.service.Bus_jszService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_jsz")
public class Bus_jszController {

    @Autowired
    Bus_jszService bus_jszService;

    @PostMapping("list")
    public Map<String, Object> bus_jszList(@RequestBody Map<String, Object> map){
        return bus_jszService.bus_jszList(map);
    }

    @PostMapping("edit")
    public Map<String, Object> Bus_jszEdit(@RequestBody Bus_jsz bus_jsz){
        return bus_jszService.bus_jszEdit(bus_jsz);
    }

    @PostMapping("add")
    public Map<String, Object> Bus_jszAdd(@RequestBody Bus_jsz bus_jsz){
        return bus_jszService.bus_jszAdd(bus_jsz);
    }

    @PostMapping("del")
    public Map<String, Object> Bus_jszDel(@RequestBody Bus_jsz bus_jsz){
        return bus_jszService.bus_jszDel(bus_jsz);
    }

}
