package com.bus.service;

import org.springframework.stereotype.Service;
import com.bus.pojo.Bus_uploadorder;
import com.bus.mapper.Bus_uploadorderMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@Service
public class Bus_uploadorderService{

	@Autowired
	Bus_uploadorderMapper bus_uploadorderMapper;

	public Map<String, Object> bus_uploadorderList(Bus_uploadorder bus_uploadorder){
		return null;
	}

	public Map<String, Object> bus_uploadorderAdd(Bus_uploadorder bus_uploadorder){
		return null;
	}

	public Map<String, Object> bus_uploadorderEdit(Bus_uploadorder bus_uploadorder){
		return null;
	}

	public Map<String, Object> bus_uploadorderDel(Bus_uploadorder bus_uploadorder){
		return null;
	}

}