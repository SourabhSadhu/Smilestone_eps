package com.my.portal.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the fees_breakup database table.
 *  findByPatientId(@Param("patientId") Long patientId);
	findByPrescriptionId(@Param("prescriptionId") Long prescriptionId);
	findByClinicalFindingId(@Param("clinicalFindingId") Long clinicalFindingId);
	findByPatientAndPrescriptionId(@Param("patientId") Long patientId, @Param("prescriptionId") Long prescriptionId);
	findByFeesBreakup(@Param("patientId") Long patientId, @Param("prescriptionId") Long prescriptionId, @Param("clinicalFindingId") Long clinicalFindingId);
 */
@Entity
@Table(name="fees_breakup")
@NamedQueries({
	@NamedQuery(name="FeesBreakup.findAll", query="SELECT f FROM FeesBreakup f"),
	@NamedQuery(name="FeesBreakup.findByPatientId", query="SELECT f FROM FeesBreakup f WHERE f.patient.pId = :patientId"),
	@NamedQuery(name="FeesBreakup.findByPrescriptionId", query="SELECT f FROM FeesBreakup f WHERE f.prescriptionHistory.prescriptionId = :prescriptionId"),
	@NamedQuery(name="FeesBreakup.findByClinicalFindingId", query="SELECT f FROM FeesBreakup f WHERE f.clinicalFinding.fId = :clinicalFindingId"),
	@NamedQuery(name="FeesBreakup.findByPatientAndPrescriptionId", 
		query="SELECT f FROM FeesBreakup f WHERE f.patient.pId = :patientId AND f.prescriptionHistory.prescriptionId = :prescriptionId"),
	@NamedQuery(name="FeesBreakup.findByFeesBreakup", 
			query="SELECT f FROM FeesBreakup f WHERE f.patient.pId = :patientId AND f.prescriptionHistory.prescriptionId = :prescriptionId"+
			" AND f.clinicalFinding.fId = :clinicalFindingId")
})
public class FeesBreakup implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="f_id")
	private Long fId;

	private BigDecimal amount;

	private String notes;

	@Column(name="ts_created")
	private Timestamp tsCreated;

	//bi-directional many-to-one association to ClinicalFinding
	@ManyToOne
	@JoinColumn(name="clinical_findings_ref")
	private ClinicalFinding clinicalFinding;

	//bi-directional many-to-one association to Patient
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;

	//bi-directional many-to-one association to PrescriptionHistory
	@ManyToOne
	@JoinColumn(name="prescription_id")
	private PrescriptionHistory prescriptionHistory;

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

	public ClinicalFinding getClinicalFinding() {
		return this.clinicalFinding;
	}

	public void setClinicalFinding(ClinicalFinding clinicalFinding) {
		this.clinicalFinding = clinicalFinding;
	}

	public Patient getPatient() {
		return this.patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public PrescriptionHistory getPrescriptionHistory() {
		return this.prescriptionHistory;
	}

	public void setPrescriptionHistory(PrescriptionHistory prescriptionHistory) {
		this.prescriptionHistory = prescriptionHistory;
	}

}