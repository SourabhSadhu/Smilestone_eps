package com.my.portal.model;

public enum ResponseStatus {

	SUCCESS("Success"), 
	FAILURE("Failure");

	String desc;

	ResponseStatus(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}

}
