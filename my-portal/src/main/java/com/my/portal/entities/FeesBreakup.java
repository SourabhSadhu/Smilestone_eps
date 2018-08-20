package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


/**
 * The persistent class for the fees_breakup database table.
 * 
 */
@Entity
@Table(name="fees_breakup")
@NamedQuery(name="FeesBreakup.findAll", query="SELECT f FROM FeesBreakup f")
public class FeesBreakup implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="f_id")
	private Long fId;

	private BigDecimal amount;

	@Column(name="clinical_findings_ref")
	private Long clinicalFindingsRef;

	private String notes;

	@Column(name="patient_id")
	private Long patientId;

	@Column(name="prescription_id")
	private Long prescriptionId;

	@Temporal(TemporalType.DATE)
	@Column(name="ts_created")
	private Date tsCreated;

	public FeesBreakup() {
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