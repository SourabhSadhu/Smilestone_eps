package com.my.portal.model;

import java.io.Serializable;
import java.sql.Timestamp;

import com.my.portal.entities.MedicalHistoryMaster;
import com.my.portal.entities.Patient;

public class MedicalHistoryView implements Serializable {
	
	private static final long serialVersionUID = 9129670593956909083L;
	private Long medicalHistoryId;
	private String note;
	private String severity;	
	//TODO: Change to string for ui
	private Timestamp startedFrom;
	private String medicalHistoryMasterName;
	private Patient patient;

	public MedicalHistoryView() {
	}

	public Long getMedicalHistoryId() {
		return this.medicalHistoryId;
	}

	public void setMedicalHistoryId(Long medicalHistoryId) {
		this.medicalHistoryId = medicalHistoryId;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getSeverity() {
		return this.severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	public Timestamp getStartedFrom() {
		return this.startedFrom;
	}

	public void setStartedFrom(Timestamp startedFrom) {
		this.startedFrom = startedFrom;
	}

	public String getMedicalHistoryMasterName() {
		return this.medicalHistoryMasterName;
	}

	public void setMedicalHistoryMasterName(String medicalHistoryMasterName) {
		this.medicalHistoryMasterName = medicalHistoryMasterName;
	}

	public Patient getPatient() {
		return this.patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}