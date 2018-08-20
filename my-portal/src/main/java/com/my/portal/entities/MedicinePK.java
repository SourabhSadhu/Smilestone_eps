package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the medicines database table.
 * 
 */
@Embeddable
public class MedicinePK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="medicine_name")
	private String medicineName;

	@Column(name="disease_code")
	private String diseaseCode;

	@Column(name="age_group", insertable=false, updatable=false)
	private String ageGroup;

	public MedicinePK() {
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
		if (!(other instanceof MedicinePK)) {
			return false;
		}
		MedicinePK castOther = (MedicinePK)other;
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