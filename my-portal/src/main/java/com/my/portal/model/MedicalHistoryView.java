package com.my.portal.model;

import java.io.Serializable;
import java.sql.Timestamp;

public class MedicalHistoryView implements Serializable {
	
	private static final long serialVersionUID = 8596285564750726903L;
	
	private Long medicalHistoryId;
	private String medicalHistoryName;
	private String note;
	private Long patientId;
	private Long prescriptionId;
	private String severity;
	private Timestamp startedFrom;

	public MedicalHistoryView() {
	}

	public final Long getMedicalHistoryId() {
		return medicalHistoryId;
	}

	public final void setMedicalHistoryId(Long medicalHistoryId) {
		this.medicalHistoryId = medicalHistoryId;
	}

	public final String getMedicalHistoryName() {
		return medicalHistoryName;
	}

	public final void setMedicalHistoryName(String medicalHistoryName) {
		this.medicalHistoryName = medicalHistoryName;
	}

	public final String getNote() {
		return note;
	}

	public final void setNote(String note) {
		this.note = note;
	}

	public final Long getPatientId() {
		return patientId;
	}

	public final void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public final Long getPrescriptionId() {
		return prescriptionId;
	}

	public final void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public final String getSeverity() {
		return severity;
	}

	public final void setSeverity(String severity) {
		this.severity = severity;
	}

	public final Timestamp getStartedFrom() {
		return startedFrom;
	}

	public final void setStartedFrom(Timestamp startedFrom) {
		this.startedFrom = startedFrom;
	}

	
}