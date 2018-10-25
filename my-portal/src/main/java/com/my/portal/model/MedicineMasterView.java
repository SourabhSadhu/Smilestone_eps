package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class MedicineMasterView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2548648265826797384L;
	private String medicineName;
	private String ageGroup;
	private Long treatmentId;
	private String dosage;
	private BigDecimal clinicalAvailability;
	private String diseaseCode;
	private String diseaseName;
	private AgeGroupView ageGroupBean;
	private TreatmentPlanView treatmentPlan;
	private Long medicineId;

	public MedicineMasterView() {
	}


	public String getMedicineName() {
		return medicineName;
	}


	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}


	public String getAgeGroup() {
		return ageGroup;
	}


	public void setAgeGroup(String ageGroup) {
		this.ageGroup = ageGroup;
	}


	public Long getTreatmentId() {
		return treatmentId;
	}


	public void setTreatmentId(Long treatmentId) {
		this.treatmentId = treatmentId;
	}


	public String getDosage() {
		return dosage;
	}


	public void setDosage(String dosage) {
		this.dosage = dosage;
	}


	public BigDecimal getClinicalAvailability() {
		return this.clinicalAvailability;
	}

	public void setClinicalAvailability(BigDecimal clinicalAvailability) {
		this.clinicalAvailability = clinicalAvailability;
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

	public AgeGroupView getAgeGroupBean() {
		return this.ageGroupBean;
	}

	public void setAgeGroupBean(AgeGroupView ageGroupBean) {
		this.ageGroupBean = ageGroupBean;
	}

	public TreatmentPlanView getTreatmentPlan() {
		return this.treatmentPlan;
	}

	public void setTreatmentPlan(TreatmentPlanView treatmentPlan) {
		this.treatmentPlan = treatmentPlan;
	}

	public Long getMedicineId() {
		return medicineId;
	}
	
	public void setMedicineId(Long medicineId) {
		this.medicineId = medicineId;
	}
	
}