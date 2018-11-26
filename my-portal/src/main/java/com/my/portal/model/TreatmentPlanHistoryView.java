package com.my.portal.model;

import java.io.Serializable;

public class TreatmentPlanHistoryView implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long tId;
	private String clinicalFinding;
	private String note;
	private Long patientId;
	private Long prescriptionId;
	private String tName;
	private String toothIndex;
	private Long tsCreated;
	private Long tsModified;

	public TreatmentPlanHistoryView() {
	}

	public Long getTId() {
		return this.tId;
	}

	public void setTId(Long tId) {
		this.tId = tId;
	}

	public String getClinicalFinding() {
		return this.clinicalFinding;
	}

	public void setClinicalFinding(String clinicalFinding) {
		this.clinicalFinding = clinicalFinding;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Long getPatientId() {
		return this.patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public Long getPrescriptionId() {
		return this.prescriptionId;
	}

	public void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public String getTName() {
		return this.tName;
	}

	public void setTName(String tName) {
		this.tName = tName;
	}

	public String getToothIndex() {
		return this.toothIndex;
	}

	public void setToothIndex(String toothIndex) {
		this.toothIndex = toothIndex;
	}

	public Long getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Long tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Long getTsModified() {
		return this.tsModified;
	}

	public void setTsModified(Long tsModified) {
		this.tsModified = tsModified;
	}

}