package com.bus.mapper;

import com.bus.pojo.Bus_jsz;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Map;

@Mapper
public interface Bus_jszMapper {

    @Select("select * from bus_jsz where Busname like concat(ifNull(#{name}, ''), '%')")
    List<Bus_jsz> bus_jszList(Map<String, Object> map);

    @Update("update bus_jsz set Busname = #{Busname}, sex = #{sex}, card = #{card}, address = #{address}, Firsttime = #{Firsttime} where id = #{id}")
    boolean bus_jszEdit(Bus_jsz bus_jsz);

    @Delete("delete from bus_jsz where id = #{id}")
    boolean bus_jszDel(Bus_jsz bus_jsz);

    @Insert("insert into bus_jsz(Busname, sex, card, address, Firsttime) values(#{Busname}, #{sex}, #{card}, #{address}, #{Firsttime})")
    boolean bus_jszAdd(Bus_jsz bus_jsz);

}
