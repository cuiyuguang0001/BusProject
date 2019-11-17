package com.bus.service;

import com.bus.mapper.Bug_logMapper;
import com.bus.pojo.Bug_log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class Bug_logService {

	@Autowired
    Bug_logMapper bug_logMapper;

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