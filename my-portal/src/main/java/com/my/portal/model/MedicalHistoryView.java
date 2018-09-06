package com.my.portal.model;

import java.io.Serializable;
import java.sql.Timestamp;

public class MedicalHistoryView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 8596285564750726903L;
	private Long medicalHistoryId;
	private String note;
	private String severity;
	private Timestamp startedFrom;
	private MedicalHistoryMasterView medicalHistoryMaster;
	private PatientView patient;
	private PrescriptionHistoryView prescriptionHistory;

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

	public MedicalHistoryMasterView getMedicalHistoryMaster() {
		return this.medicalHistoryMaster;
	}

	public void setMedicalHistoryMaster(MedicalHistoryMasterView medicalHistoryMaster) {
		this.medicalHistoryMaster = medicalHistoryMaster;
	}

	public PatientView getPatient() {
		return this.patient;
	}

	public void setPatient(PatientView patient) {
		this.patient = patient;
	}

	public PrescriptionHistoryView getPrescriptionHistory() {
		return prescriptionHistory;
	}

	public void setPrescriptionHistory(PrescriptionHistoryView prescriptionHistory) {
		this.prescriptionHistory = prescriptionHistory;
	}

}