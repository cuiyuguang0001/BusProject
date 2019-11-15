package com.bus.controller;

import org.springframework.web.bind.annotation.*;
import com.bus.pojo.Bus_driver;
import com.bus.service.Bus_driverService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_driver")
public class Bus_driverController{

	@Autowired
	Bus_driverService bus_driverService;

	@PostMapping("list")
	public Map<String, Object> bus_driverList(@RequestBody Map<String, Object> map){
		return bus_driverService.bus_driverList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bus_driverAdd(@RequestBody Bus_driver bus_driver){
		return bus_driverService.bus_driverAdd(bus_driver);
	}

	@PostMapping("edit")
	public Map<String, Object> bus_driverEdit(@RequestBody Bus_driver bus_driver){
		return bus_driverService.bus_driverEdit(bus_driver);
	}

	@PostMapping("del")
	public Map<String, Object> bus_driverDel(@RequestBody Bus_driver bus_driver){
		return bus_driverService.bus_driverDel(bus_driver);
	}

}