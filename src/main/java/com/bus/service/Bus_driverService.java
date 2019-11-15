package com.bus.service;

import org.springframework.stereotype.Service;
import com.bus.pojo.Bus_driver;
import com.bus.mapper.Bus_driverMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@Service
public class Bus_driverService{

	@Autowired
	Bus_driverMapper bus_driverMapper;

	public Map<String, Object> bus_driverList(Bus_driver bus_driver){
		return null;
	}

	public Map<String, Object> bus_driverAdd(Bus_driver bus_driver){
		return null;
	}

	public Map<String, Object> bus_driverEdit(Bus_driver bus_driver){
		return null;
	}

	public Map<String, Object> bus_driverDel(Bus_driver bus_driver){
		return null;
	}

}