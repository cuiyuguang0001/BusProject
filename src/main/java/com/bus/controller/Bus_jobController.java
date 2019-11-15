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

	@PostMapping("list")
	public Map<String, Object> bus_jobList(@RequestBody Map<String, Object> map){
		return bus_jobService.bus_jobList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bus_jobAdd(@RequestBody Bus_job bus_job){
		return bus_jobService.bus_jobAdd(bus_job);
	}

	@PostMapping("edit")
	public Map<String, Object> bus_jobEdit(@RequestBody Bus_job bus_job){
		return bus_jobService.bus_jobEdit(bus_job);
	}

	@PostMapping("del")
	public Map<String, Object> bus_jobDel(@RequestBody Bus_job bus_job){
		return bus_jobService.bus_jobDel(bus_job);
	}

}