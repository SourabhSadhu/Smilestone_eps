package com.my.portal.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;


/**
 * The persistent class for the clinical_findings database table.
 * 
 * findByNameToothAgeGrp(@Param("f_name") String fName, @Param("tooth_index") long toothIndex, @Param("age_grp_id") String ageGrpId);
 */
@Entity
@Table(name="clinical_findings")
@NamedQueries({	
	@NamedQuery(name="ClinicalFinding.findAll", query="SELECT c FROM ClinicalFinding c"),
	@NamedQuery(name="ClinicalFinding.findByNameToothAgeGrp", 
		query="SELECT c FROM ClinicalFinding c WHERE c.fName = :f_name AND c.toothQuadrent.toothIndex = :tooth_index AND c.ageGroupBean.groupId = :age_grp_id")
})
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