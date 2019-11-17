package com.bus.controller;

import com.bus.pojo.Bug_log;
import com.bus.service.Bug_logService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bug_log")
public class Bug_logController {

	@Autowired
	Bug_logService bug_logService;

	@PostMapping("list")
	public Map<String, Object> bug_logList(@RequestBody Map<String, Object> map){
		return bug_logService.bug_logList(map);
	}

	@PostMapping("add")
	public Map<String, Object> bug_logAdd(@RequestBody Bug_log bug_log){
		return bug_logService.bug_logAdd(bug_log);
	}

	@PostMapping("del")
	public Map<String, Object> bug_logDel(@RequestBody Bug_log bug_log){
		return bug_logService.bug_logDel(bug_log);
	}

}