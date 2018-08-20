package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class FeesBreakupView implements Serializable {
	
	private static final long serialVersionUID = 7870137900693294589L;
	private Long fId;
	private BigDecimal amount;
	private Long clinicalFindingsRef;
	private String notes;
	private Long patientId;
	private Long prescriptionId;
	private Date tsCreated;

	public FeesBreakupView() {
	}

	public Long getFId() {
		return this.fId;
	}

	public void setFId(Long fId) {
		this.fId = fId;
	}

	public BigDecimal getAmount() {
		return this.amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Long getClinicalFindingsRef() {
		return this.clinicalFindingsRef;
	}

	public void setClinicalFindingsRef(Long clinicalFindingsRef) {
		this.clinicalFindingsRef = clinicalFindingsRef;
	}

	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
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

	public Date getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Date tsCreated) {
		this.tsCreated = tsCreated;
	}

}