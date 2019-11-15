package com.bus.service;

import com.bus.pojo.Bus_user;
import com.bus.util.CommitUtil;
import com.bus.util.Constant;
import com.bus.util.PageUtil;
import com.bus.util.Request;
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

	public Map<String, Object> bus_busList(Map<String, Object> map){
		PageUtil pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
		map.put("page", pageUtil);
		List<Bus_bus> bus_users = bus_busMapper.bus_busList(map);
		for(Bus_bus b : bus_users){
			b.setBuyTime(CommitUtil.getShortTime(b.getBuyTime()));
			b.setUploadTime(CommitUtil.getShortTime(b.getUploadTime()));
		}
		return new Request().ok(Constant.REQUEST_GOOD).okList(bus_users, pageUtil.getCount());
	}

	public Map<String, Object> bus_busAdd(Bus_bus bus_bus){
		bus_bus.setBuyTime(CommitUtil.getTineLine());
		if(!bus_busMapper.bus_busAdd(bus_bus))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_busEdit(Bus_bus bus_bus){
		if(!bus_busMapper.bus_busEdit(bus_bus))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_busDel(Bus_bus bus_bus){
		if(!bus_busMapper.bus_busDel(bus_bus))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

}