package com.bus.controller;

import org.springframework.web.bind.annotation.*;
import com.bus.pojo.Bus_bus;
import com.bus.service.Bus_busService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_bus")
public class Bus_busController{

	@Autowired
	Bus_busService bus_busService;

	@PostMapping("list")
	public Map<String, Object> bus_busList(@RequestBody Map<String, Object> map){
		return bus_busService.bus_busList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bus_busAdd(@RequestBody Bus_bus bus_bus){
		return bus_busService.bus_busAdd(bus_bus);
	}

	@PostMapping("edit")
	public Map<String, Object> bus_busEdit(@RequestBody Bus_bus bus_bus){
		return bus_busService.bus_busEdit(bus_bus);
	}

	@PostMapping("del")
	public Map<String, Object> bus_busDel(@RequestBody Bus_bus bus_bus){
		return bus_busService.bus_busDel(bus_bus);
	}

}