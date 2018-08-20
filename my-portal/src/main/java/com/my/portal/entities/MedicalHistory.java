package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the medical_history database table.
 * 
 */
@Entity
@Table(name="medical_history")
@NamedQuery(name="MedicalHistory.findAll", query="SELECT m FROM MedicalHistory m")
public class MedicalHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id	
	@Column(name="disease_name")
	private String diseaseName;

	@Column(name="disease_from")
	private Timestamp diseaseFrom;

	private String note;

	private String severity;

	public MedicalHistory() {
	}

	public String getDiseaseName() {
		return this.diseaseName;
	}

	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}

	public Timestamp getDiseaseFrom() {
		return this.diseaseFrom;
	}

	public void setDiseaseFrom(Timestamp diseaseFrom) {
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