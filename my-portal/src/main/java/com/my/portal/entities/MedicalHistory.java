package com.my.portal.entities;

import java.io.Serializable;
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
 * The persistent class for the medical_history database table.
 * 
 * MedicalHistory getByHistoryName(@Param("name") String name);
 * MedicalHistory getByPatientId(@Param("patient_id") Long id);
 * 
 */
@Entity
@Table(name="medical_history")
@NamedQueries({
	@NamedQuery(name="MedicalHistory.findAll", query="SELECT m FROM MedicalHistory m"),
	@NamedQuery(name="MedicalHistory.getByHistoryName", 
			query="SELECT m FROM MedicalHistory m WHERE m.medicalHistoryMaster.medicalHistoryName = :name"),
	@NamedQuery(name="MedicalHistory.getByPatientId", 
			query="SELECT m FROM MedicalHistory m WHERE m.patient.pId = :patient_idO")
})
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