package com.bus.pojo;

public class Bus_user{

	//主键
	private int id;
	//名称
	private String name;
	//年龄
	private int age;
	//性别
	private String sex;
	//职位
	private String job;
	//薪资
	private int sal;
	//入职时间
	private String joinDate;

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

	public int getAge(){
		return age;
	}

	public void setAge(int age){
		this.age=age;
	}

	public String getSex(){
		return sex;
	}

	public void setSex(String sex){
		this.sex=sex;
	}

	public String getJob(){
		return job;
	}

	public void setJob(String job){
		this.job=job;
	}

	public int getSal(){
		return sal;
	}

	public void setSal(int sal){
		this.sal=sal;
	}

	public String getJoinDate(){
		return joinDate;
	}

	public void setJoinDate(String joinDate){
		this.joinDate=joinDate;
	}

}