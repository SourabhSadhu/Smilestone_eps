package com.my.portal.entities;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@SequenceGenerator(name="MEDICINE_HISTORY_ID_GENERATOR", sequenceName="medicine_history_id_seq", allocationSize = 1, schema = "eps")
@Table(name="medicine_history")
@NamedQueries({
	@NamedQuery(name="MedicineHistory.findAll", query="SELECT m FROM MedicineHistory m"),
	@NamedQuery(name="MedicineHistory.getMedicineHistoryByPatientId", query="SELECT m FROM MedicineHistory m "
			+ " WHERE m.patientId = :patientId"),
	@NamedQuery(name="MedicineHistory.getMedicineHistoryByPrescriptionId", query="SELECT m FROM MedicineHistory m"
			+ " WHERE m.prescriptionId = :prescriptionId ORDER BY m.tsCreated DESC")
})
public class MedicineHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(generator="MEDICINE_HISTORY_ID_GENERATOR")
	@Column(name="med_id")
	private Long medId;

	@Column(name="disease_code")
	private String diseaseCode;

	@Column(name="disease_name")
	private String diseaseName;

	private String dosage;

	@Column(name="medicine_name")
	private String medicineName;

	@Column(name="patient_id")
	private Long patientId;

	@Column(name="prescription_id")
	private Long prescriptionId;
	
	@Column(name="ts_created")
	private Timestamp tsCreated;

	public MedicineHistory() {
	}

	public Long getMedId() {
		return this.medId;
	}

	public void setMedId(Long medId) {
		this.medId = medId;
	}

	public String getDiseaseCode() {
		return this.diseaseCode;
	}

	public void setDiseaseCode(String diseaseCode) {
		this.diseaseCode = diseaseCode;
	}

	public String getDiseaseName() {
		return this.diseaseName;
	}

	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}

	public String getDosage() {
		return this.dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getMedicineName() {
		return this.medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public final Long getPatientId() {
		return patientId;
	}

	public final void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public final Long getPrescriptionId() {
		return prescriptionId;
	}

	public final void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public final Timestamp getTsCreated() {
		return tsCreated;
	}

	public final void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

}