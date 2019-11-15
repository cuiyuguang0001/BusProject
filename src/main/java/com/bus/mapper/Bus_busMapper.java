package com.bus.mapper;

import org.apache.ibatis.annotations.*;
import com.bus.pojo.Bus_bus;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_busMapper{

	@Select("select id, name, norms, buyTime, uploadTime, state from bus_bus where state = 1 and name like concat(ifNull(#{name}, ''), '%')")
	List<Bus_bus> bus_busList(Map<String, Object> map);

	@Insert("insert into bus_bus(name, norms, buyTime, uploadTime, state) values(#{name}, #{norms}, #{buyTime}, 0, 1")
	boolean bus_busAdd(Bus_bus bus_bus);

	@Update("update bus_bus set name = #{name}, norms = #{norms}, state = #{state} where id = #{id}")
	boolean bus_busEdit(Bus_bus bus_bus);

	@Delete("delete from bus_bus where id = #{id}")
	boolean bus_busDel(Bus_bus bus_bus);

	@Update("update bus_bus set uploadTime = #{uploadTime} where name = #{name}")
	boolean bus_busUpdateTime(String time, String name);

}