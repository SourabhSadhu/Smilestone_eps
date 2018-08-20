package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;


public class MedicineView implements Serializable {

	private static final long serialVersionUID = -4709864767652298620L;
	private MedicinePKView id;
	private BigDecimal clinicalAvailability;
	private String diseaseName;
	private String dosage;
	private AgeGroupView ageGroupBean;
	private TreatmentPlanView treatmentPlan;

	public MedicineView() {
	}

	public MedicinePKView getId() {
		return this.id;
	}

	public void setId(MedicinePKView id) {
		this.id = id;
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