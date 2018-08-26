package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;


public class MedicineMasterView implements Serializable {

	private static final long serialVersionUID = -4709864767652298620L;
	private String medicineName;
	private String diseaseCode;
	private String ageGroup;
	private BigDecimal clinicalAvailability;
	private String diseaseName;
	private String dosage;
	private AgeGroupView ageGroupBean;
	private TreatmentPlanView treatmentPlan;

	public MedicineMasterView() {
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public String getDiseaseCode() {
		return diseaseCode;
	}

	public void setDiseaseCode(String diseaseCode) {
		this.diseaseCode = diseaseCode;
	}

	public String getAgeGroup() {
		return ageGroup;
	}

	public void setAgeGroup(String ageGroup) {
		this.ageGroup = ageGroup;
	}

	public BigDecimal getClinicalAvailability() {
		return this.clinicalAvailability;
	}

	public void setClinicalAvailability(BigDecimal clinicalAvailability) {
		this.clinicalAvailability = clinicalAvailability;
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

}