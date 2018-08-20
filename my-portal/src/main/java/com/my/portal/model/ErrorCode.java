package com.my.portal.model;

public enum ErrorCode {

	DUPLICATE_AGE_GRP("Age Group already exists"),
	INVALID_INPUT("Invalid input"),
	NOT_FOUND("Data not found");

	String desc;

	ErrorCode(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}

}
