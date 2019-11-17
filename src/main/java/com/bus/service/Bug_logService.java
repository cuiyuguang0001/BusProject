package com.bus.service;

import com.bus.mapper.Bug_logMapper;
import com.bus.pojo.Bug_log;
import com.bus.util.CommitUtil;
import com.bus.util.Constant;
import com.bus.util.PageUtil;
import com.bus.util.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class Bug_logService {

	@Autowired
    Bug_logMapper bug_logMapper;

	public Map<String, Object> bug_logList(Map<String, Object> map){
		PageUtil pageUtil = null;
		if(map.get("req") == null){
			pageUtil = new PageUtil((int)map.get("page"), (int)map.get("limit"));
			map.put("page", pageUtil);
		}
		List<Bug_log> bus_users = bug_logMapper.bug_logList(map);
		for(Bug_log b : bus_users){
			b.setCreateDate(CommitUtil.timestampToStr(Long.valueOf(b.getCreateDate())));
		}
		return new Request().ok(Constant.REQUEST_GOOD).okList(bus_users, pageUtil == null ? 0 : pageUtil.getCount());
	}

	public Map<String, Object> bug_logAdd(Bug_log bug_log){
		bug_log.setCreateDate(CommitUtil.getTineLine());
		if(!bug_logMapper.bug_logAdd(bug_log))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

	public Map<String, Object> bug_logDel(Bug_log bug_log){
		if(!bug_logMapper.bug_logDel(bug_log))
			return new Request().error(Constant.ERROR_MSG);
		return new Request().ok(Constant.REQUEST_GOOD);
	}

}