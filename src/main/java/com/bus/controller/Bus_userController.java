package com.bus.controller;

import org.springframework.web.bind.annotation.*;
import com.bus.pojo.Bus_user;
import com.bus.service.Bus_userService;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bus_user")
public class Bus_userController{

	@Autowired
	Bus_userService bus_userService;

	@PostMapping("list")
	public Map<String, Object> bus_userList(@RequestBody Map<String, Object> map){
		return bus_userService.bus_userList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bus_userAdd(@RequestBody Bus_user bus_user){
		return bus_userService.bus_userAdd(bus_user);
	}

	@PostMapping("edit")
	public Map<String, Object> bus_userEdit(@RequestBody Bus_user bus_user){
		return bus_userService.bus_userEdit(bus_user);
	}

	@PostMapping("del")
	public Map<String, Object> bus_userDel(@RequestBody Bus_user bus_user){
		return bus_userService.bus_userDel(bus_user);
	}

}