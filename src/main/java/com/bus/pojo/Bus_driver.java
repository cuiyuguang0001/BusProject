package com.bus.pojo;

public class Bus_driver{

	private int id;
	private String name;
	private String sfz;
	private int age;
	private String brithday;
	//添加日期
	private String time;
	//是否禁用1是0否
	private int state;

	public int getId(){
		return id;
	}

	public void setId(int id){
		this.id=id;
	}

	public String getName(){
		return name;
	}

	public void setName(String name){
		this.name=name;
	}

	public String getSfz(){
		return sfz;
	}

	public void setSfz(String sfz){
		this.sfz=sfz;
	}

	public int getAge(){
		return age;
	}

	public void setAge(int age){
		this.age=age;
	}

	public String getBrithday(){
		return brithday;
	}

	public void setBrithday(String brithday){
		this.brithday=brithday;
	}

	public String getTime(){
		return time;
	}

	public void setTime(String time){
		this.time=time;
	}

	public int getState(){
		return state;
	}

	public void setState(int state){
		this.state=state;
	}

}