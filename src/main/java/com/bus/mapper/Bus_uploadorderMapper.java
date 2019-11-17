package com.bus.mapper;

import org.apache.ibatis.annotations.*;
import com.bus.pojo.Bus_uploadorder;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_uploadorderMapper{

	@Select("select id, busname, money, bdesc, time, state from bus_uploadorder order by state asc")
	List<Bus_uploadorder> bus_uploadorderList(Map<String, Object> map);

	@Insert("insert into bus_uploadorder(busname, money, bdesc, time, state) values(#{busname}, #{money}, #{bdesc}, #{time}, 0)")
	boolean bus_uploadorderAdd(Bus_uploadorder bus_uploadorder);

	@Update("update bus_uploadorder set state = #{state} where id = #{id}")
	boolean bus_uploadorderEdit(Bus_uploadorder bus_uploadorder);

}