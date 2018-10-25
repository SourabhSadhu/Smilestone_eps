package com.my.portal.model;

import java.io.Serializable;
import java.util.List;

public class MedicalHistoryMasterView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6946057168693235181L;
	private String medicalHistoryName;
	private List<MedicalHistoryView> medicalHistories;
	public MedicalHistoryMasterView() {
	}

	public String getMedicalHistoryName() {
		return this.medicalHistoryName;
	}

	public void setMedicalHistoryName(String medicalHistoryName) {
		this.medicalHistoryName = medicalHistoryName;
	}

	public List<MedicalHistoryView> getMedicalHistories() {
		return this.medicalHistories;
	}

	public void setMedicalHistories(List<MedicalHistoryView> medicalHistories) {
		this.medicalHistories = medicalHistories;
	}

//	public MedicalHistoryView addMedicalHistory(MedicalHistoryView medicalHistory) {
//		getMedicalHistories().add(medicalHistory);
//		medicalHistory.setMedicalHistoryMaster(this);
//
//		return medicalHistory;
//	}
//
//	public MedicalHistoryView removeMedicalHistory(MedicalHistoryView medicalHistory) {
//		getMedicalHistories().remove(medicalHistory);
//		medicalHistory.setMedicalHistoryMaster(null);
//
//		return medicalHistory;
//	}

}