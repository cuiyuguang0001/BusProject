package com.bus.pojo;

public class Bus_station {

	private int id;
	//车名
	private String busName;
	//点1
	private String pointOne;
	//点2
	private String pointTwo;
	private int state;

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public int getId(){
		return id;
	}

	public void setId(int id){
		this.id=id;
	}

	public String getBusName(){
		return busName;
	}

	public void setBusName(String busName){
		this.busName=busName;
	}

	public String getPointOne(){
		return pointOne;
	}

	public void setPointOne(String pointOne){
		this.pointOne=pointOne;
	}

	public String getPointTwo(){
		return pointTwo;
	}

	public void setPointTwo(String pointTwo){
		this.pointTwo=pointTwo;
	}

}