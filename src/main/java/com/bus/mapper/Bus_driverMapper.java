package com.bus.mapper;

import org.apache.ibatis.annotations.*;
import com.bus.pojo.Bus_driver;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_driverMapper{

	@Select("select id, name, sfz, age, brithday, time, state from bus_driver where state = 0")
	List<Bus_driver> bus_driverList(Map<String, Object> map);

	@Insert("insert into bus_driver(name, sfz, age, brithday, time, state) values(#{name}, #{sfz}, #{age}, #{brithday}, #{time}, 0)")
	boolean bus_driverAdd(Bus_driver bus_driver);

	@Update("update bus_driver set name = #{name}, sfz = #{sfz}, age = #{age}, brithday = #{brithday}, state = #{state} where id = #{id}")
	boolean bus_driverEdit(Bus_driver bus_driver);

	@Delete("delete from bus_driver where id = #{id}")
	boolean bus_driverDel(Bus_driver bus_driver);

}