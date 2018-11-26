package com.my.portal.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


/**
 * The persistent class for the clinical_findings database table.
 * 
 */
@Entity
@SequenceGenerator(name="CLINICAL_FINDINGS_FID_GENERATOR", initialValue=1, sequenceName="eps.findings_seq")
@Table(name="clinical_findings")
@NamedQueries({	
	@NamedQuery(name="ClinicalFinding.findAll", query="SELECT c FROM ClinicalFinding c")
})
public class ClinicalFinding implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLINICAL_FINDINGS_FID_GENERATOR")
	@Column(name="f_id")
	private Long fId;

	@Column(name="f_desc")
	private String fDesc;

	@Column(name="f_name")
	private String fName;

	public ClinicalFinding() {
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