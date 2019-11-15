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

	public Map<String, Object> bus_uploadorderList(Bus_uploadorder bus_uploadorder){
		return null;
	}

	public Map<String, Object> bus_uploadorderAdd(Bus_uploadorder bus_uploadorder){
		return null;
	}

	public Map<String, Object> bus_uploadorderEdit(Bus_uploadorder bus_uploadorder){
		return null;
	}

	public Map<String, Object> bus_uploadorderDel(Bus_uploadorder bus_uploadorder){
		return null;
	}

}