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

	public Map<String, Object> bus_busList(Bus_bus bus_bus){
		return null;
	}

	public Map<String, Object> bus_busAdd(Bus_bus bus_bus){
		return null;
	}

	public Map<String, Object> bus_busEdit(Bus_bus bus_bus){
		return null;
	}

	public Map<String, Object> bus_busDel(Bus_bus bus_bus){
		return null;
	}

}