package com.my.portal.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


/**
 * The persistent class for the fees_breakup database table.
 * 
 */
@Entity
@SequenceGenerator(name="FEES_BREAKUP_FID_GENERATOR", sequenceName="fees_id_seq", allocationSize = 1, schema = "eps")
@Table(name="fees_breakup")
@NamedQueries({
	@NamedQuery(name="FeesBreakup.findAll", query="SELECT f FROM FeesBreakup f"),
	@NamedQuery(name="FeesBreakup.findByPatientId", query="SELECT f FROM FeesBreakup f WHERE f.patientId = :patientId"),
	@NamedQuery(name="FeesBreakup.findByPrescriptionId", query="SELECT f FROM FeesBreakup f WHERE f.prescriptionId = :prescriptionId"),
	@NamedQuery(name="FeesBreakup.findByClinicalFindingId", query="SELECT f FROM FeesBreakup f WHERE f.trtmntPlanRef = :clinicalFindingId"),
	@NamedQuery(name="FeesBreakup.findByPatientAndPrescriptionId", 
		query="SELECT f FROM FeesBreakup f WHERE f.patientId = :patientId AND f.prescriptionId = :prescriptionId"),
	@NamedQuery(name="FeesBreakup.findByFeesBreakup", 
			query="SELECT f FROM FeesBreakup f WHERE f.patientId = :patientId AND f.prescriptionId = :prescriptionId"+
			" AND f.trtmntPlanRef = :clinicalFindingId")
})
public class FeesBreakup implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="FEES_BREAKUP_FID_GENERATOR")
	@Column(name="f_id")
	private Long fId;

	private BigDecimal amount;

	@Column(name="trtmnt_plan_ref")
	private Long trtmntPlanRef;

	private String notes;

	@Column(name="patient_id")
	private Long patientId;

	@Column(name="prescription_id")
	private Long prescriptionId;

	@Column(name="ts_created")
	private Timestamp tsCreated;

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

	public String getNotes() {
		return this.notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Timestamp getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Long getTrtmntPlanRef() {
		return trtmntPlanRef;
	}

	public void setTrtmntPlanRef(Long trtmntPlanRef) {
		this.trtmntPlanRef = trtmntPlanRef;
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

}