package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


/**
 * The persistent class for the patient_case_history_image database table.
 * 
 */
@Entity
@Table(name="patient_case_history_image")
@NamedQuery(name="PatientCaseHistoryImage.findAll", query="SELECT p FROM PatientCaseHistoryImage p")
public class PatientCaseHistoryImage implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="PATIENT_CASE_HISTORY_IMAGE_CASEHISTORYID_GENERATOR", sequenceName="REPLACE_SEQ_NAME")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PATIENT_CASE_HISTORY_IMAGE_CASEHISTORYID_GENERATOR")
	@Column(name="case_history_id")
	private Long caseHistoryId;

	@Column(name="case_history_image_uri")
	private String caseHistoryImageUri;

	@Column(name="patient_id")
	private Long patientId;

	@Column(name="prescription_id")
	private Long prescriptionId;

	@Column(name="ts_created")
	private Timestamp tsCreated;

	@Column(name="ts_diagnosed")
	private Timestamp tsDiagnosed;

	public PatientCaseHistoryImage() {
	}

	public Long getCaseHistoryId() {
		return this.caseHistoryId;
	}

	public void setCaseHistoryId(Long caseHistoryId) {
		this.caseHistoryId = caseHistoryId;
	}

	public String getCaseHistoryImageUri() {
		return this.caseHistoryImageUri;
	}

	public void setCaseHistoryImageUri(String caseHistoryImageUri) {
		this.caseHistoryImageUri = caseHistoryImageUri;
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

	public Timestamp getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Timestamp getTsDiagnosed() {
		return this.tsDiagnosed;
	}

	public void setTsDiagnosed(Timestamp tsDiagnosed) {
		this.tsDiagnosed = tsDiagnosed;
	}

}