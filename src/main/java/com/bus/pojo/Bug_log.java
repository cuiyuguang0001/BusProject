package com.bus.pojo;

public class Bug_log {

	private int id;
	//填写人名称
	private String name;
	//车名
	private String busName;
	//填写日期
	private int createDate;
	//内容
	private String text;
	//标题
	private String title;

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

	public String getBusName(){
		return busName;
	}

	public void setBusName(String busName){
		this.busName=busName;
	}

	public int getCreateDate(){
		return createDate;
	}

	public void setCreateDate(int createDate){
		this.createDate=createDate;
	}

	public String getText(){
		return text;
	}

	public void setText(String text){
		this.text=text;
	}

	public String getTitle(){
		return title;
	}

	public void setTitle(String title){
		this.title=title;
	}

}