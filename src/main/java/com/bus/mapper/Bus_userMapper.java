package com.bus.mapper;

import org.apache.ibatis.annotations.*;
import com.bus.pojo.Bus_user;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_userMapper{

	@Select("select id, name, age, sex, job, sal, joinDate from bus_user where name like concat(ifNull(#{name}, ''), '%')")
	List<Bus_user> bus_userList(Map<String, Object> map);

	@Insert("insert into bus_user(name, age, sex, job, sal, joinDate) values(#{name}, #{age}, #{sex}, #{job}, #{sal}, #{joinDate}")
	boolean bus_userAdd(Bus_user bus_user);

	@Update("update bus_user set name = #{name}, age = #{age}, sex = #{sex}, job = #{job}, sal = #{sal} where id = #{id}")
	boolean bus_userEdit(Bus_user bus_user);

	@Delete("delete from bus_user where id = #{id}")
	boolean bus_userDel(Bus_user bus_user);

}