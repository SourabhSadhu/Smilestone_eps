package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;


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
			query="SELECT m FROM MedicalHistory m WHERE m.medicalHistoryMaster.medicalHistoryName = :name"),
	@NamedQuery(name="MedicalHistory.getByPatientId", 
			query="SELECT m FROM MedicalHistory m WHERE m.patient.pId = :patient_idO")
})
public class MedicalHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id	
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="MEDICAL_HISTORY_MEDICALHISTORYID_GENERATOR")
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
	
	//bi-directional many-to-one association to PrescriptionHistory
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="prescription_id")
	private PrescriptionHistory prescriptionHistory;

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
	

	public PrescriptionHistory getPrescriptionHistory() {
		return this.prescriptionHistory;
	}

	public void setPrescriptionHistory(PrescriptionHistory prescriptionHistory) {
		this.prescriptionHistory = prescriptionHistory;
	}

}