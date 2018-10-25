package com.my.portal.entities;

import java.io.Serializable;
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
 * The persistent class for the prescription_history database table.
 * 
 */
@Entity
@SequenceGenerator(name="PRESCRIPTION_HISTORY_PRESCRIPTIONID_GENERATOR", sequenceName="prescription_id_seq", allocationSize = 1, schema = "eps")
@Table(name="prescription_history")
@NamedQueries({
	@NamedQuery(name="PrescriptionHistory.findAll", query="SELECT p FROM PrescriptionHistory p"),
	@NamedQuery(name="PrescriptionHistory.findByPatientId", query="SELECT p FROM PrescriptionHistory p WHERE p.patientId = :patientId"),
	@NamedQuery(name="PrescriptionHistory.getByDateRange", query="SELECT p FROM PrescriptionHistory p")
})
public class PrescriptionHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PRESCRIPTION_HISTORY_PRESCRIPTIONID_GENERATOR")
	@Column(name="prescription_id")
	private Long prescriptionId;

	private String advice;

	@Column(name="chief_complaint")
	private String chiefComplaint;

	@Column(name="clinical_findings")
	private String clinicalFindings;

	private String investigation;

	private String medicines;

	@Column(name="next_appointment")
	private Timestamp nextAppointment;

	private String note;

	@Column(name="patient_id")
	private Long patientId;

	@Column(name="provisional_diagnosis")
	private String provisionalDiagnosis;

	@Column(name="treatment_done")
	private String treatmentDone;

	@Column(name="treatment_plan")
	private String treatmentPlan;

	@Column(name="ts_created")
	private Timestamp tsCreated;

	@Column(name="ts_modified")
	private Timestamp tsModified;

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

	public String getClinicalFindings() {
		return this.clinicalFindings;
	}

	public void setClinicalFindings(String clinicalFindings) {
		this.clinicalFindings = clinicalFindings;
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

	public Timestamp getNextAppointment() {
		return this.nextAppointment;
	}

	public void setNextAppointment(Timestamp nextAppointment) {
		this.nextAppointment = nextAppointment;
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

	public String getPersonalDiagnosis() {
		return this.provisionalDiagnosis;
	}

	public void setPersonalDiagnosis(String personalDiagnosis) {
		this.provisionalDiagnosis = personalDiagnosis;
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

}