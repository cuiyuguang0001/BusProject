package com.bus.mapper;

import org.apache.ibatis.annotations.*;
import com.bus.pojo.Bus_uploadorder;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_uploadorderMapper{

	@Select("select id, busname, money, desc, time, state from bus_uploadorder")
	List<Bus_uploadorder> bus_uploadorderList(Map<String, Object> map);

	@Insert("insert into bus_uploadorder(busname, money, desc, time, state) values(#{busname}, #{money}, #{desc}, #{time}, #{state}")
	boolean bus_uploadorderAdd(Bus_uploadorder bus_uploadorder);

	@Update("update bus_uploadorder set busname = #{busname}, money = #{money}, desc = #{desc}, time = #{time}, state = #{state} where id = #{id}")
	boolean bus_uploadorderEdit(Bus_uploadorder bus_uploadorder);

	@Delete("delete from bus_uploadorder where id = #{id}")
	boolean bus_uploadorderDel(Bus_uploadorder bus_uploadorder);

}