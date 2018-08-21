package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the prescription_history database table.
 * 
 */
@Entity
@Table(name="prescription_history")
@NamedQuery(name="PrescriptionHistory.findAll", query="SELECT p FROM PrescriptionHistory p")
public class PrescriptionHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="prescription_id")
	private Long prescriptionId;

	private String advice;

	@Column(name="chief_complaint")
	private String chiefComplaint;

	@Column(name="chief_findings")
	private String chiefFindings;

	private String investigation;

	private String medicines;

	private String note;

	@Column(name="personal_diagnosis")
	private String personalDiagnosis;

	@Column(name="treatment_done")
	private String treatmentDone;

	@Column(name="treatment_plan")
	private String treatmentPlan;

	@Column(name="ts_created")
	private Timestamp tsCreated;

	@Column(name="ts_modified")
	private Timestamp tsModified;

	//bi-directional many-to-one association to Patient
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;

	public PrescriptionHistory() {
	}

	public Long getPrescriptionId() {
		return this.prescriptionId;
	}

	public void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public String getAdvice() {
		return this.advice;
	}

	public void setAdvice(String advice) {
		this.advice = advice;
	}

	public String getChiefComplaint() {
		return this.chiefComplaint;
	}

	public void setChiefComplaint(String chiefComplaint) {
		this.chiefComplaint = chiefComplaint;
	}

	public String getChiefFindings() {
		return this.chiefFindings;
	}

	public void setChiefFindings(String chiefFindings) {
		this.chiefFindings = chiefFindings;
	}

	public String getInvestigation() {
		return this.investigation;
	}

	public void setInvestigation(String investigation) {
		this.investigation = investigation;
	}

	public String getMedicines() {
		return this.medicines;
	}

	public void setMedicines(String medicines) {
		this.medicines = medicines;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getPersonalDiagnosis() {
		return this.personalDiagnosis;
	}

	public void setPersonalDiagnosis(String personalDiagnosis) {
		this.personalDiagnosis = personalDiagnosis;
	}

	public String getTreatmentDone() {
		return this.treatmentDone;
	}

	public void setTreatmentDone(String treatmentDone) {
		this.treatmentDone = treatmentDone;
	}

	public String getTreatmentPlan() {
		return this.treatmentPlan;
	}

	public void setTreatmentPlan(String treatmentPlan) {
		this.treatmentPlan = treatmentPlan;
	}

	public Timestamp getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Timestamp getTsModified() {
		return this.tsModified;
	}

	public void setTsModified(Timestamp tsModified) {
		this.tsModified = tsModified;
	}

	public Patient getPatient() {
		return this.patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}