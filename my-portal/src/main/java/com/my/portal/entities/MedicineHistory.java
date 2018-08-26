package com.my.portal.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the medicine_history database table.
 * 
 */
@Entity
@Table(name="medicine_history")
@NamedQuery(name="MedicineHistory.findAll", query="SELECT m FROM MedicineHistory m")
public class MedicineHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="med_id")
	private Long medId; 
	
	@Column(name="disease_code")
	private String diseaseCode;

	@Column(name="disease_name")
	private String diseaseName;

	private String dosage;

	@Column(name="medicine_name")
	private String medicineName;

	//bi-directional many-to-one association to Patient
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;

	//bi-directional many-to-one association to PrescriptionHistory
	@ManyToOne
	@JoinColumn(name="prescription_id")
	private PrescriptionHistory prescriptionHistory;

	public MedicineHistory() {
	}

	public Long getMedId() {
		return medId;
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