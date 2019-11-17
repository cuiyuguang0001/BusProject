package com.bus.controller;

import com.bus.pojo.Bug_log;
import com.bus.service.Bug_logService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("bug_log")
public class Bug_logController {

	@Autowired
	Bug_logService bug_logService;

	public Map<String, Object> bug_logList(Bug_log bug_log){
		return null;
	}

	public Map<String, Object> bug_logAdd(Bug_log bug_log){
		return null;
	}

	public Map<String, Object> bug_logEdit(Bug_log bug_log){
		return null;
	}

	public Map<String, Object> bug_logDel(Bug_log bug_log){
		return null;
	}

}