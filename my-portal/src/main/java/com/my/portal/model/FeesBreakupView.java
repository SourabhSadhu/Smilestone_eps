package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

public class FeesBreakupView implements Serializable {
	
	private static final long serialVersionUID = 7870137900693294589L;
	private Long fId;
	private BigDecimal amount;
	private String notes;
	private long tsCreated;
	private Long clinicalFindingRef;
	private Long patientRef;
	private Long prescriptionHistoryRef;
	public FeesBreakupView() {
	}

	public Long getfId() {
		return fId;
	}

	public void setfId(Long fId) {
		this.fId = fId;
	}

	public BigDecimal getAmount() {
		return this.amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public long getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(long tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Long getClinicalFindingRef() {
		return clinicalFindingRef;
	}

	public void setClinicalFindingRef(Long clinicalFindingRef) {
		this.clinicalFindingRef = clinicalFindingRef;
	}

	public Long getPatientRef() {
		return patientRef;
	}

	public void setPatientRef(Long patientRef) {
		this.patientRef = patientRef;
	}

	public Long getPrescriptionHistoryRef() {
		return prescriptionHistoryRef;
	}

	public void setPrescriptionHistoryRef(Long prescriptionHistoryRef) {
		this.prescriptionHistoryRef = prescriptionHistoryRef;
	}

}