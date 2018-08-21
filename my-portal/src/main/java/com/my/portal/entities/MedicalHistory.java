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
	@Column(name="medical_history_id")
	private Long medicalHistoryId;

	private String note;

	private String severity;

	@Column(name="started_from")
	private Timestamp startedFrom;

	//bi-directional many-to-one association to MedicalHistoryMaster
	@ManyToOne
	@JoinColumn(name="medical_history_name")
	private MedicalHistoryMaster medicalHistoryMaster;

	//bi-directional many-to-one association to Patient
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;

	public MedicalHistory() {
	}

	public Long getMedicalHistoryId() {
		return this.medicalHistoryId;
	}

	public void setMedicalHistoryId(Long medicalHistoryId) {
		this.medicalHistoryId = medicalHistoryId;
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

	public Timestamp getStartedFrom() {
		return this.startedFrom;
	}

	public void setStartedFrom(Timestamp startedFrom) {
		this.startedFrom = startedFrom;
	}

	public MedicalHistoryMaster getMedicalHistoryMaster() {
		return this.medicalHistoryMaster;
	}

	public void setMedicalHistoryMaster(MedicalHistoryMaster medicalHistoryMaster) {
		this.medicalHistoryMaster = medicalHistoryMaster;
	}

	public Patient getPatient() {
		return this.patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}