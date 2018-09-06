package com.my.portal.model;

import java.io.Serializable;
public class FeeConfigView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 8524817337055257394L;
	private Long feeConfigId;
	private String ageGroupId;
	private Long ageGroupPercent;
	private Long baseFee;
	private Long toothGroupId;
	private Long toothGroupPercent;
	private Long treatmentPlanId;
	private long totalFee;

	public FeeConfigView() {
	}

	public Long getFeeConfigId() {
		return this.feeConfigId;
	}

	public void setFeeConfigId(Long feeConfigId) {
		this.feeConfigId = feeConfigId;
	}

	public String getAgeGroupId() {
		return this.ageGroupId;
	}

	public void setAgeGroupId(String ageGroupId) {
		this.ageGroupId = ageGroupId;
	}

	public Long getAgeGroupPercent() {
		return this.ageGroupPercent;
	}

	public void setAgeGroupPercent(Long ageGroupPercent) {
		this.ageGroupPercent = ageGroupPercent;
	}

	public Long getBaseFee() {
		return this.baseFee;
	}

	public void setBaseFee(Long baseFee) {
		this.baseFee = baseFee;
	}

	public Long getToothGroupId() {
		return this.toothGroupId;
	}

	public void setToothGroupId(Long toothGroupId) {
		this.toothGroupId = toothGroupId;
	}

	public Long getToothGroupPercent() {
		return this.toothGroupPercent;
	}

	public void setToothGroupPercent(Long toothGroupPercent) {
		this.toothGroupPercent = toothGroupPercent;
	}

	public Long getTreatmentPlanId() {
		return this.treatmentPlanId;
	}

	public void setTreatmentPlanId(Long treatmentPlanId) {
		this.treatmentPlanId = treatmentPlanId;
	}

	public long getTotalFee() {
		return totalFee;
	}

	public void setTotalFee(long totalFee) {
		this.totalFee = totalFee;
	}

}