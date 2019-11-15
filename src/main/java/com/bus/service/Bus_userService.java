package com.bus.service;

import com.bus.util.CommitUtil;
import com.bus.util.PageUtil;
import com.bus.util.Request;
import org.springframework.stereotype.Service;
import com.bus.pojo.Bus_user;
import com.bus.mapper.Bus_userMapper;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Map;

@Service
public class Bus_userService{

	@Autowired
	Bus_userMapper bus_userMapper;

	public Map<String, Object> bus_userList(Map<String, Object> map){
		PageUtil pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
		map.put("page", pageUtil);
		List<Bus_user> bus_users = bus_userMapper.bus_userList(map);
		for(Bus_user b : bus_users)
			b.setJoinDate(CommitUtil.getShortTime(b.getJoinDate()));
		return new Request().ok("响应成功").okList(bus_users, pageUtil.getCount());
	}

	public Map<String, Object> bus_userAdd(Bus_user bus_user){
		return null;
	}

	public Map<String, Object> bus_userEdit(Bus_user bus_user){
		return null;
	}

	public Map<String, Object> bus_userDel(Bus_user bus_user){
		return null;
	}

}