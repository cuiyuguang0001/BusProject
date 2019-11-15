package com.bus.service;

import com.bus.mapper.Bus_busMapper;
import com.bus.pojo.Bus_user;
import com.bus.util.CommitUtil;
import com.bus.util.Constant;
import com.bus.util.PageUtil;
import com.bus.util.Request;
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
	@Autowired
	Bus_busMapper bus_busMapper;

	public Map<String, Object> bus_uploadorderList(Map<String, Object> map){
		PageUtil pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
		map.put("page", pageUtil);
		List<Bus_uploadorder> bus_users = bus_uploadorderMapper.bus_uploadorderList(map);
		for(Bus_uploadorder b : bus_users)
			b.setTime(CommitUtil.timestampToStr(Long.valueOf(b.getTime())));
		return new Request().ok(Constant.REQUEST_GOOD).okList(bus_users, pageUtil.getCount());
	}

	public Map<String, Object> bus_uploadorderAdd(Bus_uploadorder bus_uploadorder){
		bus_uploadorder.setTime(CommitUtil.getTineLine());
		if(!bus_uploadorderMapper.bus_uploadorderAdd(bus_uploadorder))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_uploadorderEdit(Bus_uploadorder bus_uploadorder){
		if(bus_uploadorder.getState() == 1)
			if(bus_busMapper.bus_busUpdateTime(CommitUtil.getTineLine(), bus_uploadorder.getBusname()))
				return new Request().error(Constant.ERROR_MSG);
		if(!bus_uploadorderMapper.bus_uploadorderEdit(bus_uploadorder))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

}