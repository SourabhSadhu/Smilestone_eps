package com.my.portal.model;

import java.io.Serializable;

public class MedicinePKView implements Serializable {

	private static final long serialVersionUID = 6214674421303370899L;
	private String medicineName;
	private String diseaseCode;
	private String ageGroup;

	public MedicinePKView() {
	}
	public String getMedicineName() {
		return this.medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getDiseaseCode() {
		return this.diseaseCode;
	}
	public void setDiseaseCode(String diseaseCode) {
		this.diseaseCode = diseaseCode;
	}
	public String getAgeGroup() {
		return this.ageGroup;
	}
	public void setAgeGroup(String ageGroup) {
		this.ageGroup = ageGroup;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof MedicinePKView)) {
			return false;
		}
		MedicinePKView castOther = (MedicinePKView)other;
		return 
			this.medicineName.equals(castOther.medicineName)
			&& this.diseaseCode.equals(castOther.diseaseCode)
			&& this.ageGroup.equals(castOther.ageGroup);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.medicineName.hashCode();
		hash = hash * prime + this.diseaseCode.hashCode();
		hash = hash * prime + this.ageGroup.hashCode();
		
		return hash;
	}
}