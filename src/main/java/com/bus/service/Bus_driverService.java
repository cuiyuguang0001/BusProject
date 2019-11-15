package com.bus.service;

import com.bus.pojo.Bus_bus;
import com.bus.util.CommitUtil;
import com.bus.util.Constant;
import com.bus.util.PageUtil;
import com.bus.util.Request;
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

	public Map<String, Object> bus_driverList(Map<String, Object> map){
		PageUtil pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
		map.put("page", pageUtil);
		List<Bus_driver> bus_users = bus_driverMapper.bus_driverList(map);
		for(Bus_driver b : bus_users){
			b.setTime(CommitUtil.getShortTime(b.getTime()));
		}
		return new Request().ok(Constant.REQUEST_GOOD).okList(bus_users, pageUtil.getCount());
	}

	public Map<String, Object> bus_driverAdd(Bus_driver bus_driver){
		bus_driver.setTime(CommitUtil.getTineLine());
		if(!bus_driverMapper.bus_driverAdd(bus_driver))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_driverEdit(Bus_driver bus_driver){
		if(!bus_driverMapper.bus_driverEdit(bus_driver))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_driverDel(Bus_driver bus_driver){
		if(!bus_driverMapper.bus_driverDel(bus_driver))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

}