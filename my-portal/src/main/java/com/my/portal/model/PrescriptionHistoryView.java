package com.my.portal.model;

import java.io.Serializable;
import java.sql.Timestamp;


public class PrescriptionHistoryView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2022178289084986726L;
	private Long prescriptionId;
	private String advice;
	private String chiefComplaint;
	private String clinicalFindings;
	private String investigation;
	private String medicines;
	private Timestamp nextAppointment;
	private String note;
	private Long patientId;
	private String personalDiagnosis;
	private String treatmentDone;
	private String treatmentPlan;
	private Timestamp tsCreated;
	private Timestamp tsModified;

	public PrescriptionHistoryView() {
	}

	public final Long getPrescriptionId() {
		return prescriptionId;
	}

	public final void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public final String getAdvice() {
		return advice;
	}

	public final void setAdvice(String advice) {
		this.advice = advice;
	}

	public final String getChiefComplaint() {
		return chiefComplaint;
	}

	public final void setChiefComplaint(String chiefComplaint) {
		this.chiefComplaint = chiefComplaint;
	}

	public final String getClinicalFindings() {
		return clinicalFindings;
	}

	public final void setClinicalFindings(String clinicalFindings) {
		this.clinicalFindings = clinicalFindings;
	}

	public final String getInvestigation() {
		return investigation;
	}

	public final void setInvestigation(String investigation) {
		this.investigation = investigation;
	}

	public final String getMedicines() {
		return medicines;
	}

	public final void setMedicines(String medicines) {
		this.medicines = medicines;
	}

	public final Timestamp getNextAppointment() {
		return nextAppointment;
	}

	public final void setNextAppointment(Timestamp nextAppointment) {
		this.nextAppointment = nextAppointment;
	}

	public final String getNote() {
		return note;
	}

	public final void setNote(String note) {
		this.note = note;
	}

	public final Long getPatientId() {
		return patientId;
	}

	public final void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public final String getPersonalDiagnosis() {
		return personalDiagnosis;
	}

	public final void setPersonalDiagnosis(String personalDiagnosis) {
		this.personalDiagnosis = personalDiagnosis;
	}

	public final String getTreatmentDone() {
		return treatmentDone;
	}

	public final void setTreatmentDone(String treatmentDone) {
		this.treatmentDone = treatmentDone;
	}

	public final String getTreatmentPlan() {
		return treatmentPlan;
	}

	public final void setTreatmentPlan(String treatmentPlan) {
		this.treatmentPlan = treatmentPlan;
	}

	public final Timestamp getTsCreated() {
		return tsCreated;
	}

	public final void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

	public final Timestamp getTsModified() {
		return tsModified;
	}

	public final void setTsModified(Timestamp tsModified) {
		this.tsModified = tsModified;
	}

}