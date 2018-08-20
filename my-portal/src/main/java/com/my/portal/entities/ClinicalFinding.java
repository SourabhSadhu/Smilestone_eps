package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the clinical_findings database table.
 * 
 */
@Entity
@Table(name="clinical_findings")
@NamedQuery(name="ClinicalFinding.findAll", query="SELECT c FROM ClinicalFinding c")
public class ClinicalFinding implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="f_id")
	private Long fId;

	@Column(name="f_desc")
	private String fDesc;

	@Column(name="f_name")
	private String fName;

	private Long fee;

	//bi-directional many-to-one association to AgeGroup
	@ManyToOne
	@JoinColumn(name="age_group")
	private AgeGroup ageGroupBean;

	//bi-directional many-to-one association to ToothQuadrent
	@ManyToOne
	@JoinColumn(name="f_tooth")
	private ToothQuadrent toothQuadrent;

	//bi-directional many-to-one association to TreatmentPlan
	@OneToMany(mappedBy="clinicalFindingBean")
	private List<TreatmentPlan> treatmentPlans;

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

	public Long getFee() {
		return this.fee;
	}

	public void setFee(Long fee) {
		this.fee = fee;
	}

	public AgeGroup getAgeGroupBean() {
		return this.ageGroupBean;
	}

	public void setAgeGroupBean(AgeGroup ageGroupBean) {
		this.ageGroupBean = ageGroupBean;
	}

	public ToothQuadrent getToothQuadrent() {
		return this.toothQuadrent;
	}

	public void setToothQuadrent(ToothQuadrent toothQuadrent) {
		this.toothQuadrent = toothQuadrent;
	}

	public List<TreatmentPlan> getTreatmentPlans() {
		return this.treatmentPlans;
	}

	public void setTreatmentPlans(List<TreatmentPlan> treatmentPlans) {
		this.treatmentPlans = treatmentPlans;
	}

	public TreatmentPlan addTreatmentPlan(TreatmentPlan treatmentPlan) {
		getTreatmentPlans().add(treatmentPlan);
		treatmentPlan.setClinicalFindingBean(this);

		return treatmentPlan;
	}

	public TreatmentPlan removeTreatmentPlan(TreatmentPlan treatmentPlan) {
		getTreatmentPlans().remove(treatmentPlan);
		treatmentPlan.setClinicalFindingBean(null);

		return treatmentPlan;
	}

}