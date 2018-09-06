package com.my.portal.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * The primary key class for the medicine_master database table.
 * 
 */
@Embeddable
public class MedicineMasterPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@Column(name="medicine_name")
	private String medicineName;

	@Column(name="age_group", insertable=false, updatable=false)
	private String ageGroup;

	@Column(name="treatment_id", insertable=false, updatable=false)
	private Long treatmentId;

	private String dosage;

	public MedicineMasterPK() {
	}
	public String getMedicineName() {
		return this.medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	public String getAgeGroup() {
		return this.ageGroup;
	}
	public void setAgeGroup(String ageGroup) {
		this.ageGroup = ageGroup;
	}
	public Long getTreatmentId() {
		return this.treatmentId;
	}
	public void setTreatmentId(Long treatmentId) {
		this.treatmentId = treatmentId;
	}
	public String getDosage() {
		return this.dosage;
	}
	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof MedicineMasterPK)) {
			return false;
		}
		MedicineMasterPK castOther = (MedicineMasterPK)other;
		return 
			this.medicineName.equals(castOther.medicineName)
			&& this.ageGroup.equals(castOther.ageGroup)
			&& this.treatmentId.equals(castOther.treatmentId)
			&& this.dosage.equals(castOther.dosage);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.medicineName.hashCode();
		hash = hash * prime + this.ageGroup.hashCode();
		hash = hash * prime + this.treatmentId.hashCode();
		hash = hash * prime + this.dosage.hashCode();
		
		return hash;
	}
}