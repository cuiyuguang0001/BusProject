package com.bus.controller;

import org.springframework.web.bind.annotation.*;
import com.bus.pojo.Bus_uploadorder;
import com.bus.service.Bus_uploadorderService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_uploadorder")
public class Bus_uploadorderController{

	@Autowired
	Bus_uploadorderService bus_uploadorderService;

	@PostMapping("list")
	public Map<String, Object> bus_uploadorderList(@RequestBody Map<String, Object> map){
		return bus_uploadorderService.bus_uploadorderList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bus_uploadorderAdd(@RequestBody Bus_uploadorder bus_uploadorder){
		return bus_uploadorderService.bus_uploadorderAdd(bus_uploadorder);
	}

	@PostMapping("edit")
	public Map<String, Object> bus_uploadorderEdit(@RequestBody Bus_uploadorder bus_uploadorder){
		return bus_uploadorderService.bus_uploadorderEdit(bus_uploadorder);
	}

}