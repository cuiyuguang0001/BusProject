package com.bus.mapper;

import org.apache.ibatis.annotations.*;
import com.bus.pojo.Bus_job;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_jobMapper{

	@Select("select list, id, name from bus_job")
	List<Bus_job> bus_jobQuery();

	@Insert("insert into bus_job(list, name) values(#{list}, #{name})")
	boolean bus_jobAdd(Bus_job bus_job);

	@Update("update bus_job set list = #{list}, name = #{name} where id = #{id}")
	boolean bus_jobEdit(Bus_job bus_job);

	@Delete("delete from bus_job where id = #{id}")
	boolean bus_jobDel(Bus_job bus_job);

}