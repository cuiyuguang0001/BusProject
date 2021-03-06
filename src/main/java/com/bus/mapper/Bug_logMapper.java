package com.bus.mapper;

import com.bus.pojo.Bug_log;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bug_logMapper {

	@Select("select id, name, busName, createDate, text, title from bug_log where name like concat(ifNull(#{name}, ''), '%')")
	List<Bug_log> bug_logList(Map<String, Object> map);

	@Insert("insert into bug_log(name, busName, createDate, text, title) values(#{name}, #{busName}, #{createDate}, #{text}, #{title})")
	boolean bug_logAdd(Bug_log bug_log);

	@Delete("delete from bug_log where id = #{id}")
	boolean bug_logDel(Bug_log bug_log);

}