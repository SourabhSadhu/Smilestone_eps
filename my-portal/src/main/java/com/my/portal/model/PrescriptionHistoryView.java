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
//	private String medicines;
	private Long nextAppointment;
	private String note;
	private Long patientId;
	private String provisionalDiagnosis;
//	private String treatmentDone;
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

	public final Timestamp getNextAppointment() {
		return null != nextAppointment ? new Timestamp(nextAppointment) : null;
	}

	public final void setNextAppointment(Timestamp nextAppointment) {
		if(null != nextAppointment) this.nextAppointment = nextAppointment.getTime();
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

	public final String getProvisionalDiagnosis() {
		return provisionalDiagnosis;
	}

	public final void setProvisionalDiagnosis(String personalDiagnosis) {
		this.provisionalDiagnosis = personalDiagnosis;
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