package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the medical_history_master database table.
 * 
 */
@Entity
@Table(name="medical_history_master")
@NamedQuery(name="MedicalHistoryMaster.findAll", query="SELECT m FROM MedicalHistoryMaster m")
public class MedicalHistoryMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="medical_history_name")
	private String medicalHistoryName;

	//bi-directional many-to-one association to MedicalHistory
	@OneToMany(mappedBy="medicalHistoryMaster")
	private List<MedicalHistory> medicalHistories;

	public MedicalHistoryMaster() {
	}

	public String getMedicalHistoryName() {
		return this.medicalHistoryName;
	}

	public void setMedicalHistoryName(String medicalHistoryName) {
		this.medicalHistoryName = medicalHistoryName;
	}

	public List<MedicalHistory> getMedicalHistories() {
		return this.medicalHistories;
	}

	public void setMedicalHistories(List<MedicalHistory> medicalHistories) {
		this.medicalHistories = medicalHistories;
	}

	public MedicalHistory addMedicalHistory(MedicalHistory medicalHistory) {
		getMedicalHistories().add(medicalHistory);
		medicalHistory.setMedicalHistoryMaster(this);

		return medicalHistory;
	}

	public MedicalHistory removeMedicalHistory(MedicalHistory medicalHistory) {
		getMedicalHistories().remove(medicalHistory);
		medicalHistory.setMedicalHistoryMaster(null);

		return medicalHistory;
	}

}