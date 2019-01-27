package com.my.portal.model;

import java.io.Serializable;

public class MedicineHistoryView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7207851197183330011L;
	private Long medId;
	private String diseaseCode;
	private String diseaseName;
	private String dosage;
	private String medicineName;
	private Long patientId;
	private Long prescriptionId;
	private Long tsCreated;

	public MedicineHistoryView() {
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

	public final Long getTsCreated() {
		return tsCreated;
	}

	public final void setTsCreated(Long tsCreated) {
		this.tsCreated = tsCreated;
	}

}