package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;


/**
 * The persistent class for the fees_breakup database table.
 * 
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
//	@SequenceGenerator(name="FEES_BREAKUP_FID_GENERATOR", sequenceName="REPLACE_SEQ_NAME")
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="FEES_BREAKUP_FID_GENERATOR")
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