package com.my.portal.model;

import java.io.Serializable;
import java.util.List;

public class ClinicalFindingView implements Serializable {

	private static final long serialVersionUID = -2640551771464859736L;
	private Long fId;
	private String fDesc;
	private String fName;
	private Long fee;
	private AgeGroupView ageGroupBean;
	private ToothQuadrentView toothQuadrent;
	private List<TreatmentPlanView> treatmentPlans;

	public ClinicalFindingView() {
	}

	public Long getFId() {
		return this.fId;
	}

	public void setFId(Long fId) {
		this.fId = fId;
	}

	public String getFDesc() {
		return this.fDesc;
	}

	public void setFDesc(String fDesc) {
		this.fDesc = fDesc;
	}

	public String getFName() {
		return this.fName;
	}

	public void setFName(String fName) {
		this.fName = fName;
	}

	public Long getFee() {
		return this.fee;
	}

	public void setFee(Long fee) {
		this.fee = fee;
	}

	public AgeGroupView getAgeGroupBean() {
		return this.ageGroupBean;
	}

	public void setAgeGroupBean(AgeGroupView ageGroupBean) {
		this.ageGroupBean = ageGroupBean;
	}

	public ToothQuadrentView getToothQuadrent() {
		return this.toothQuadrent;
	}

	public void setToothQuadrent(ToothQuadrentView toothQuadrent) {
		this.toothQuadrent = toothQuadrent;
	}

	public List<TreatmentPlanView> getTreatmentPlans() {
		return this.treatmentPlans;
	}

	public void setTreatmentPlans(List<TreatmentPlanView> treatmentPlans) {
		this.treatmentPlans = treatmentPlans;
	}

	public TreatmentPlanView addTreatmentPlan(TreatmentPlanView treatmentPlan) {
		getTreatmentPlans().add(treatmentPlan);
		treatmentPlan.setClinicalFindingBean(this);

		return treatmentPlan;
	}

	public TreatmentPlanView removeTreatmentPlan(TreatmentPlanView treatmentPlan) {
		getTreatmentPlans().remove(treatmentPlan);
		treatmentPlan.setClinicalFindingBean(null);

		return treatmentPlan;
	}

}