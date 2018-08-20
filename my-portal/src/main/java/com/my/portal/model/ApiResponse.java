package com.my.portal.model;

public class ApiResponse {

	ResponseStatus status;
	String desc;
	Object resp;
	
	//Default value
	public ApiResponse(){
		this.status = ResponseStatus.FAILURE;
	}
	public void setStatus(ResponseStatus status) {
		this.status = status;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public void setResp(Object resp) {
		this.resp = resp;
	}
	
}
