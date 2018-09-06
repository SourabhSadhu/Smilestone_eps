package com.my.portal.model;

import java.io.Serializable;

public class ClinicalFindingView implements Serializable {
	
	private static final long serialVersionUID = 5615963822165574912L;
	private Long fId;
	private String fDesc;
	private String fName;

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

}