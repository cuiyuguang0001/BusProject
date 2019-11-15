package com.bus.service;

import com.bus.util.Constant;
import com.bus.util.Request;
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

	public Map<String, Object> bus_jobList(){
		return new Request().ok(Constant.REQUEST_GOOD).okList(bus_jobMapper.bus_jobQuery(), 0);
	}

	public Map<String, Object> bus_jobAdd(Bus_job bus_job){
		if(!bus_jobMapper.bus_jobAdd(bus_job))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_jobEdit(Bus_job bus_job){
		if(!bus_jobMapper.bus_jobEdit(bus_job))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_jobDel(Bus_job bus_job){
		if(!bus_jobMapper.bus_jobDel(bus_job))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

}