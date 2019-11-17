package com.bus.service;

import com.bus.mapper.Bus_stationMapper;
import com.bus.pojo.Bus_station;
import com.bus.util.Constant;
import com.bus.util.PageUtil;
import com.bus.util.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class Bus_stationService {

	@Autowired
    Bus_stationMapper bus_stationMapper;

	public Map<String, Object> bus_stationList(Map<String, Object> map){
		PageUtil pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
		map.put("page", pageUtil);
		return new Request().ok(Constant.REQUEST_GOOD).okList(bus_stationMapper.bus_stationList(map), pageUtil.getCount());
	}

	public Map<String, Object> bus_stationAdd(Bus_station bus_station){
		if(bus_station.getState() == 1)
			if(bus_stationMapper.bus_stationModel(bus_station.getBusName()) > 0)
				return new Request().error("该车辆已经存在线路规划，如需修改请申请修改规划");
		if(!bus_stationMapper.bus_stationAdd(bus_station))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bus_stationEdit(Bus_station bus_station){
		if(bus_station.getState() == 1){
			if(!bus_stationMapper.bus_stationEdit(bus_station))
				return new Request().error(Constant.ERROR_MSG);
		}else if(bus_station.getState() == 2){
			if(!bus_stationMapper.bus_stationDel(bus_station))
				return new Request().error("删除操作错误");
		}else {
			return new Request().error("参数错误");
		}
		return new Request().ok(Constant.REQUEST_GOOD);
	}

}