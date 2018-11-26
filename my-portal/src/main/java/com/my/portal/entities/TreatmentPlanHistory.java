package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;

/**
 * The persistent class for the treatment_plan_history database table.
 * 
 */
@Entity
@SequenceGenerator(name = "TREATMENT_PLAN_HISTORY_TID_GENERATOR", sequenceName = "treatment_plan_history_seq", allocationSize = 1, schema = "eps")
@Table(name = "treatment_plan_history")
@NamedQueries({ @NamedQuery(name = "TreatmentPlanHistory.findAll", query = "SELECT t FROM TreatmentPlanHistory t"),
		@NamedQuery(name = "TreatmentPlanHistory.findByPatientId", query = "SELECT t FROM TreatmentPlanHistory t where t.patientId = :patientId"),
		@NamedQuery(name = "TreatmentPlanHistory.findByPrescriptionId", query = "SELECT t FROM TreatmentPlanHistory t  where t.prescriptionId = :prescriptionId"),
		@NamedQuery(name = "TreatmentPlanHistory.findByPatientAndPrescriptionId", query = "SELECT t FROM TreatmentPlanHistory t  where t.patientId = :patientId and t.prescriptionId = :prescriptionId") })
public class TreatmentPlanHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TREATMENT_PLAN_HISTORY_TID_GENERATOR")
	@Column(name = "t_id")
	private Long tId;

	@Column(name = "clinical_finding")
	private String clinicalFinding;

	private String note;

	@Column(name = "patient_id")
	private Long patientId;

	@Column(name = "prescription_id")
	private Long prescriptionId;

	@Column(name = "t_name")
	private String tName;

	@Column(name = "tooth_index")
	private String toothIndex;

	@Column(name = "ts_created")
	private Timestamp tsCreated;

	@Column(name = "ts_modified")
	private Timestamp tsModified;

	public TreatmentPlanHistory() {
	}

	public Long getTId() {
		return this.tId;
	}

	public void setTId(Long tId) {
		this.tId = tId;
	}

	public String getClinicalFinding() {
		return this.clinicalFinding;
	}

	public void setClinicalFinding(String clinicalFinding) {
		this.clinicalFinding = clinicalFinding;
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

	public String getTName() {
		return this.tName;
	}

	public void setTName(String tName) {
		this.tName = tName;
	}

	public String getToothIndex() {
		return this.toothIndex;
	}

	public void setToothIndex(String toothIndex) {
		this.toothIndex = toothIndex;
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

}