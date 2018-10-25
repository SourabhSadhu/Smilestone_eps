package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;


public class FeesBreakupView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6740313101991027601L;
	
	private Long fId;
	private BigDecimal amount;
	private Long trtmntPlanRef;
	private String notes;
	private Long patientId;
	private Long prescriptionId;
	private Timestamp tsCreated;

	public FeesBreakupView() {
	}

	public Long getfId() {
		return fId;
	}

	public void setfId(Long fId) {
		this.fId = fId;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public Long getTrtmntPlanRef() {
		return trtmntPlanRef;
	}

	public void setTrtmntPlanRef(Long trtmntPlanRef) {
		this.trtmntPlanRef = trtmntPlanRef;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public Long getPrescriptionId() {
		return prescriptionId;
	}

	public void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public Timestamp getTsCreated() {
		return tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}
	
}