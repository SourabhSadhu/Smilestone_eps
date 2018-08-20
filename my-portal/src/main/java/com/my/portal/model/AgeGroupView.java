package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;

public class AgeGroupView implements Serializable {
	
	private static final long serialVersionUID = 1854212819080221825L;
	
	private String groupId;
	private BigDecimal fromAge;
	private BigDecimal toAge;
//	private List<ClinicalFindingView> clinicalFindings;
//	private List<MedicineView> medicines;

	public AgeGroupView() {
	}

	public String getGroupId() {
		return this.groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public BigDecimal getFromAge() {
		return this.fromAge;
	}

	public void setFromAge(BigDecimal fromAge) {
		this.fromAge = fromAge;
	}

	public BigDecimal getToAge() {
		return this.toAge;
	}

	public void setToAge(BigDecimal toAge) {
		this.toAge = toAge;
	}
}