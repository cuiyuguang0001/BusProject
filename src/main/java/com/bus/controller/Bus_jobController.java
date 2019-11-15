package com.bus.controller;

import org.springframework.web.bind.annotation.*;
import com.bus.pojo.Bus_job;
import com.bus.service.Bus_jobService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_job")
public class Bus_jobController{

	@Autowired
	Bus_jobService bus_jobService;

	public Map<String, Object> bus_jobList(Bus_job bus_job){
		return null;
	}

	public Map<String, Object> bus_jobAdd(Bus_job bus_job){
		return null;
	}

	public Map<String, Object> bus_jobEdit(Bus_job bus_job){
		return null;
	}

	public Map<String, Object> bus_jobDel(Bus_job bus_job){
		return null;
	}

}