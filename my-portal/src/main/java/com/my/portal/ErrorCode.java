package com.my.portal;

public enum ErrorCode {

	DUPLICATE_AGE_GRP("Age Group already exists"),
	NOT_FOUND("Data not found"),
	INVALID_INPUT("Invalid input"),
	INVALID_MEDICAL_HISTORY("Invalid Medical History"),
	INVALID_AGE_GROUP_INDEX("Age group not found"), 
	INVALID_TOOTH_QUADRENT_INDEX("Invalid tooth quadrent index"), 
	INVALID_TOOTH_QUADRENT_QUADRENT("Invalid tooth quadrent"), 
	INVALID_TOOTH_QUADRENT_NUMBER("Invalid tooth number"),
	INVALID_TOOTH_GROUP_ID("Invalid Tooth group id"),
	INVALID_CLINICAL_FINDING_ID("Clinical finding entry not found"), 
	INVALID_PATIENT_ID("Patient not found"), 
	INVALID_PRESCRIPTION_HISTORY_ID("Prescription not found"),
	INVALID_BLOOD_GROUP("Invalid blood group"), 
	INVAID_TREATMENT_PLAN_ID("Invalid treatment plan id"),
	DUPLICATE_TOOTH_INDEX("Duplicate tooth index data"), 
	TO_AGE_SMALLER_THAN_FROM_AGE("To age smaller than from age"), 
	ZERO_FEE_BREAKUP_AMOUNT("Fee can't be zero"), 
	;

	String desc;

	ErrorCode(String desc) {
		this.desc = desc;
	}

	public String getDesc() {
		return desc;
	}

}