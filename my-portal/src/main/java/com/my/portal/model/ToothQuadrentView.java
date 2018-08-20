package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class ToothQuadrentView implements Serializable {
	
	private static final long serialVersionUID = -4634247695633440672L;
	private long toothIndex;
	private BigDecimal toothNumber;
	private BigDecimal toothQdr;
//	private List<ClinicalFindingView> clinicalFindings;

	public ToothQuadrentView() {
	}

	public long getToothIndex() {
		return this.toothIndex;
	}

	public void setToothIndex(long toothIndex) {
		this.toothIndex = toothIndex;
	}

	public BigDecimal getToothNumber() {
		return this.toothNumber;
	}

	public void setToothNumber(BigDecimal toothNumber) {
		this.toothNumber = toothNumber;
	}

	public BigDecimal getToothQdr() {
		return this.toothQdr;
	}

	public void setToothQdr(BigDecimal toothQdr) {
		this.toothQdr = toothQdr;
	}

//	public List<ClinicalFindingView> getClinicalFindings() {
//		return this.clinicalFindings;
//	}
//
//	public void setClinicalFindings(List<ClinicalFindingView> clinicalFindings) {
//		this.clinicalFindings = clinicalFindings;
//	}
//
//	public ClinicalFindingView addClinicalFinding(ClinicalFindingView clinicalFinding) {
//		getClinicalFindings().add(clinicalFinding);
//		clinicalFinding.setToothQuadrent(this);
//
//		return clinicalFinding;
//	}
//
//	public ClinicalFindingView removeClinicalFinding(ClinicalFindingView clinicalFinding) {
//		getClinicalFindings().remove(clinicalFinding);
//		clinicalFinding.setToothQuadrent(null);
//
//		return clinicalFinding;
//	}

}