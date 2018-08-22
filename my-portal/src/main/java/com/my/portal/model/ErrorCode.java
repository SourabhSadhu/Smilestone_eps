package com.my.portal.model;

public enum ErrorCode {

	DUPLICATE_AGE_GRP("Age Group already exists"),
	NOT_FOUND("Data not found"),
	INVALID_INPUT("Invalid input"),
	INVALID_MEDICAL_HISTORY("Invalid Medical History"),
	INVALID_AGE_GROUP_INDEX("Age group not found"), 
	INVALID_TOOTH_QUADRENT_INDEX("Invalid tooth quadrent index"), 
	INVALID_TOOTH_QUADRENT_QUADRENT("Invalid tooth quadrent quadrent"), 
	INVALID_TOOTH_QUADRENT_NUMBER("Invalid tooth quadrent number"),
	DUPLICATE_TOOTH_INDEX("Duplicate tooth index data"), 
	TO_AGE_SMALLER_THAN_FROM_AGE("To age smaller than from age")
	;

	String desc;

	ErrorCode(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}

}
