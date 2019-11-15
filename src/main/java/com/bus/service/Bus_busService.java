package com.bus.service;

import org.springframework.stereotype.Service;
import com.bus.pojo.Bus_bus;
import com.bus.mapper.Bus_busMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@Service
public class Bus_busService{

	@Autowired
	Bus_busMapper bus_busMapper;

	public Map<String, Object> bus_busList(Bus_bus bus_bus){
		return null;
	}

	public Map<String, Object> bus_busAdd(Bus_bus bus_bus){
		return null;
	}

	public Map<String, Object> bus_busEdit(Bus_bus bus_bus){
		return null;
	}

	public Map<String, Object> bus_busDel(Bus_bus bus_bus){
		return null;
	}

}