package com.bus.pojo;

public class Bus_uploadorder{

	private int id;
	//车名
	private String busname;
	//金额
	private int money;
	//维修原因
	private String bdesc;
	//时间
	private String time;
	//状态0未审核1通过2拒绝
	private int state;

	public int getId(){
		return id;
	}

	public void setId(int id){
		this.id=id;
	}

	public String getBusname(){
		return busname;
	}

	public void setBusname(String busname){
		this.busname=busname;
	}

	public int getMoney(){
		return money;
	}

	public void setMoney(int money){
		this.money=money;
	}

	public String getBdesc(){
		return bdesc;
	}

	public void setBdesc(String bdesc){
		this.bdesc=bdesc;
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