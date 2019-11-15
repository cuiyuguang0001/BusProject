package com.bus.service;

import org.springframework.stereotype.Service;
import com.bus.pojo.Bus_job;
import com.bus.mapper.Bus_jobMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@Service
public class Bus_jobService{

	@Autowired
	Bus_jobMapper bus_jobMapper;

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