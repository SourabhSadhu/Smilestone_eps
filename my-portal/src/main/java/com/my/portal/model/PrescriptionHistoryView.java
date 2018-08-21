package com.my.portal.model;

import java.io.Serializable;
import java.sql.Timestamp;


public class PrescriptionHistoryView implements Serializable {
	
	private static final long serialVersionUID = -6822247146991891755L;
	private Long prescriptionId;
	private String advice;
	private String chiefComplaint;
	private String chiefFindings;
	private String investigation;
	private String medicines;
	private String note;
	private String personalDiagnosis;
	private String treatmentDone;
	private String treatmentPlan;
	private Timestamp tsCreated;
	private Timestamp tsModified;
//	private Patient patient;
	public PrescriptionHistoryView() {
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

//	public Patient getPatient() {
//		return this.patient;
//	}
//
//	public void setPatient(Patient patient) {
//		this.patient = patient;
//	}
}