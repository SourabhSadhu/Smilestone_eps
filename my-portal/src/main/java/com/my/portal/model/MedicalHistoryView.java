package com.my.portal.model;

import java.io.Serializable;

public class MedicalHistoryView implements Serializable {
	
	private static final long serialVersionUID = 9129670593956909083L;
	private String diseaseName;
	private String diseaseFrom;
	private String note;
	private String severity;

	public MedicalHistoryView() {
	}

	public String getDiseaseName() {
		return this.diseaseName;
	}

	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}

	public String getDiseaseFrom() {
		return this.diseaseFrom;
	}

	public void setDiseaseFrom(String diseaseFrom) {
		this.diseaseFrom = diseaseFrom;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getSeverity() {
		return this.severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

}