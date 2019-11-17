package com.bus.controller;

import com.bus.pojo.Bus_station;
import com.bus.service.Bus_stationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_station")
public class Bus_stationController {

	@Autowired
	Bus_stationService bus_stationService;

	@PostMapping("list")
	public Map<String, Object> bus_stationList(@RequestBody Map<String, Object> map){
		return bus_stationService.bus_stationList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bus_stationAdd(@RequestBody Bus_station bus_station){
		return bus_stationService.bus_stationAdd(bus_station);
	}

	@PostMapping("edit")
	public Map<String, Object> bus_stationEdit(@RequestBody Bus_station bus_station){
		return bus_stationService.bus_stationEdit(bus_station);
	}

}