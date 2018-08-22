package com.my.portal.model;

public enum ErrorCode {

	DUPLICATE_AGE_GRP("Age Group already exists"),
	NOT_FOUND("Data not found"),
	INVALID_INPUT("Invalid input"),
	INVALID_MEDICAL_HISTORY("Invalid Medical History"),
	INVALID_AGE_GROUP_INDEX("Age group not found"), 
	INVALID_TOOTH_QUADRENT("Invalid tooth quadrent")
	;

	String desc;

	ErrorCode(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}

}
