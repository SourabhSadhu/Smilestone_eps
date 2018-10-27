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
 * The persistent class for the medical_history database table.
 * 
 */
@Entity
@SequenceGenerator(name="MEDICAL_HISTORY_MEDICALHISTORYID_GENERATOR", sequenceName="medical_history_id_seq", allocationSize = 1, schema = "eps")
@Table(name="medical_history")
@NamedQueries({
	@NamedQuery(name="MedicalHistory.findAll", query="SELECT m FROM MedicalHistory m"),
	@NamedQuery(name="MedicalHistory.getByHistoryName", 
			query="SELECT m FROM MedicalHistory m WHERE m.medicalHistoryName = :name"),
	@NamedQuery(name="MedicalHistory.getByPatientId", 
			query="SELECT m FROM MedicalHistory m WHERE m.patientId = :patient_id"),
	@NamedQuery(name="MedicalHistory.getByPrescriptionId", 
			query="SELECT m FROM MedicalHistory m WHERE m.prescriptionId = :prescription_id")
})
public class MedicalHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id	
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="MEDICAL_HISTORY_MEDICALHISTORYID_GENERATOR")
	@Column(name="medical_history_id")
	private Long medicalHistoryId;

	@Column(name="medical_history_name")
	private String medicalHistoryName;

	private String note;

	@Column(name="patient_id")
	private Long patientId;

	@Column(name="prescription_id")
	private Long prescriptionId;

	private String severity;

	@Column(name="started_from")
	private Timestamp startedFrom;

	public MedicalHistory() {
	}

	public Long getMedicalHistoryId() {
		return this.medicalHistoryId;
	}

	public void setMedicalHistoryId(Long medicalHistoryId) {
		this.medicalHistoryId = medicalHistoryId;
	}

	public String getMedicalHistoryName() {
		return this.medicalHistoryName;
	}

	public void setMedicalHistoryName(String medicalHistoryName) {
		this.medicalHistoryName = medicalHistoryName;
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

	public Long getPrescriptionId() {
		return this.prescriptionId;
	}

	public void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
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

}