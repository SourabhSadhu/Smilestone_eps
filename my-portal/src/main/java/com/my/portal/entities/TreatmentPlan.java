package com.my.portal.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the treatment_plan database table.
 * 
 */
@Entity
@Table(name="treatment_plan")
@NamedQueries({
	@NamedQuery(name="TreatmentPlan.findAll", 
			query="SELECT t FROM TreatmentPlan t"),
	@NamedQuery(name="TreatmentPlan.findByClinicalFindingsID", 
		query="SELECT t FROM TreatmentPlan t WHERE t.clinicalFinding = :cfId"),
	@NamedQuery(name="TreatmentPlan.findByTreatmentName", 
		query="SELECT t FROM TreatmentPlan t WHERE t.trtName = :trtName")
})
public class TreatmentPlan implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
//	@SequenceGenerator(name="TREATMENT_PLAN_TRTID_GENERATOR", sequenceName="REPLACE_SEQ_NAME")
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="TREATMENT_PLAN_TRTID_GENERATOR")
	@Column(name="trt_id")
	private Long trtId;

	@Column(name="trt_desc")
	private String trtDesc;

	@Column(name="trt_name")
	private String trtName;

	@Column(name="clinical_finding")
	private Long clinicalFinding;

	public TreatmentPlan() {
	}

	public Long getTrtId() {
		return this.trtId;
	}

	public void setTrtId(Long trtId) {
		this.trtId = trtId;
	}

	public Long getClinicalFinding() {
		return this.clinicalFinding;
	}

	public void setClinicalFinding(Long clinicalFinding) {
		this.clinicalFinding = clinicalFinding;
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
}