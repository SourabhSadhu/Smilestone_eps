package com.my.portal.model;

import java.io.Serializable;

public class ClinicalFindingView implements Serializable {

	private static final long serialVersionUID = -2640551771464859736L;
	private Long findingId;
	private String findingDesc;
	private String findingName;
	private Long fee;
	private String ageGroupIndex;
	private long toothQuadrentIndex;
//	private List<TreatmentPlanView> treatmentPlans;

	public ClinicalFindingView() {
	}

	public Long getFindingId() {
		return findingId;
	}

	public void setFindingId(Long findingId) {
		this.findingId = findingId;
	}

	public String getFindingDesc() {
		return findingDesc;
	}

	public void setFindingDesc(String findingDesc) {
		this.findingDesc = findingDesc;
	}

	public String getFindingName() {
		return findingName;
	}

	public void setFindingName(String findingName) {
		this.findingName = findingName;
	}

	public Long getFee() {
		return fee;
	}

	public void setFee(Long fee) {
		this.fee = fee;
	}

	public String getAgeGroupIndex() {
		return ageGroupIndex;
	}

	public void setAgeGroupIndex(String ageGroupIndex) {
		this.ageGroupIndex = ageGroupIndex;
	}

	public long getToothQuadrentIndex() {
		return toothQuadrentIndex;
	}

	public void setToothQuadrentIndex(long toothQuadrentIndex) {
		this.toothQuadrentIndex = toothQuadrentIndex;
	}
	
}