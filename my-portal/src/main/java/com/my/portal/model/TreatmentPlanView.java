package com.my.portal.model;

import java.io.Serializable;
import java.util.List;

public class TreatmentPlanView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1613710874394574633L;
	private Long trtId;
	private String trtDesc;
	private String trtName;
	private Long clinicalFinding;
	
	public TreatmentPlanView() {
	}

	public Long getTrtId() {
		return this.trtId;
	}

	public void setTrtId(Long trtId) {
		this.trtId = trtId;
	}

	public String getTrtDesc() {
		return this.trtDesc;
	}

	public void setTrtDesc(String trtDesc) {
		this.trtDesc = trtDesc;
	}

	public String getTrtName() {
		return this.trtName;
	}

	public void setTrtName(String trtName) {
		this.trtName = trtName;
	}

	public final Long getClinicalFinding() {
		return clinicalFinding;
	}

	public final void setClinicalFinding(Long clinicalFinding) {
		this.clinicalFinding = clinicalFinding;
	}

}