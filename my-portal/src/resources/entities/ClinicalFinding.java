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
@NamedQueries({	
	@NamedQuery(name="ClinicalFinding.findAll", query="SELECT c FROM ClinicalFinding c")
//	@NamedQuery(name="ClinicalFinding.findByNameToothAgeGrp", 
//		query="SELECT c FROM ClinicalFinding c WHERE c.fName = :f_name AND c.toothQuadrent.toothIndex = :tooth_index AND c.ageGroupBean.groupId = :age_grp_id")
})
public class ClinicalFinding implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
//	@SequenceGenerator(name="CLINICAL_FINDINGS_FID_GENERATOR", sequenceName="REPLACE_SEQ_NAME")
//	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="CLINICAL_FINDINGS_FID_GENERATOR")
	@Column(name="f_id")
	private Long fId;

	@Column(name="f_desc")
	private String fDesc;

	@Column(name="f_name")
	private String fName;

	//bi-directional many-to-one association to FeesBreakup
	@OneToMany(mappedBy="clinicalFinding"/*, fetch = FetchType.EAGER*/)
	private List<FeesBreakup> feesBreakups;

	//bi-directional many-to-one association to TreatmentPlan
	@OneToMany(mappedBy="clinicalFindingBean"/*, fetch = FetchType.EAGER*/)
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

	public List<FeesBreakup> getFeesBreakups() {
		return this.feesBreakups;
	}

	public void setFeesBreakups(List<FeesBreakup> feesBreakups) {
		this.feesBreakups = feesBreakups;
	}

	public FeesBreakup addFeesBreakup(FeesBreakup feesBreakup) {
		getFeesBreakups().add(feesBreakup);
		feesBreakup.setClinicalFinding(this);

		return feesBreakup;
	}

	public FeesBreakup removeFeesBreakup(FeesBreakup feesBreakup) {
		getFeesBreakups().remove(feesBreakup);
		feesBreakup.setClinicalFinding(null);

		return feesBreakup;
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