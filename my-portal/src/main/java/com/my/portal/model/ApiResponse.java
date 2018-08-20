package com.my.portal.model;

import java.io.Serializable;

public class ApiResponse implements Serializable{

	private static final long serialVersionUID = -8842953338570777685L;
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
	public ResponseStatus getStatus() {
		return status;
	}
	public String getDesc() {
		return desc;
	}
	public Object getResp() {
		return resp;
	}
	
	
}
