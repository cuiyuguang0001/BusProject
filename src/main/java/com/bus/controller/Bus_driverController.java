package com.bus.controller;

import org.springframework.web.bind.annotation.*;
import com.bus.pojo.Bus_driver;
import com.bus.service.Bus_driverService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_driver")
public class Bus_driverController{

	@Autowired
	Bus_driverService bus_driverService;

	public Map<String, Object> bus_driverList(Bus_driver bus_driver){
		return null;
	}

	public Map<String, Object> bus_driverAdd(Bus_driver bus_driver){
		return null;
	}

	public Map<String, Object> bus_driverEdit(Bus_driver bus_driver){
		return null;
	}

	public Map<String, Object> bus_driverDel(Bus_driver bus_driver){
		return null;
	}

}