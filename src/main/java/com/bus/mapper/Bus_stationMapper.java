package com.bus.mapper;

import com.bus.pojo.Bus_station;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_stationMapper {

	@Select("select id, busName, pointOne, pointTwo, state from bus_station")
	List<Bus_station> bus_stationList(Map<String, Object> map);

	@Insert("insert into bus_station(busName, pointOne, pointTwo, state) values(#{busName}, #{pointOne}, #{pointTwo}, #{state})")
	boolean bus_stationAdd(Bus_station bus_station);

	@Update("update bus_station set state = #{state} where id = #{id}")
	boolean bus_stationEdit(Bus_station bus_station);

	@Delete("delete from bus_station where id = #{id}")
	boolean bus_stationDel(Bus_station bus_station);

	@Select("select count(0) from bus_station where busName = #{name}")
	int bus_stationModel(String name);

}