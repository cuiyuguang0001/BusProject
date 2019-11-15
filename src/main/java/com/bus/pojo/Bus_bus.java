package com.bus.pojo;

public class Bus_bus{

	private int id;
	//车名
	private String name;
	//型号
	private String norms;
	//购买时间
	private String buyTime;
	//最后维修时间
	private String uploadTime;
	//是否启用1启用0不启用
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

	public String getNorms(){
		return norms;
	}

	public void setNorms(String norms){
		this.norms=norms;
	}

	public String getBuyTime(){
		return buyTime;
	}

	public void setBuyTime(String buyTime){
		this.buyTime=buyTime;
	}

	public String getUploadTime(){
		return uploadTime;
	}

	public void setUploadTime(String uploadTime){
		this.uploadTime=uploadTime;
	}

	public int getState(){
		return state;
	}

	public void setState(int state){
		this.state=state;
	}

}