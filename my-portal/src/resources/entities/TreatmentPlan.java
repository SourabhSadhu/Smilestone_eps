package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the treatment_plan database table.
 * 
 */
@Entity
@Table(name="treatment_plan")
@NamedQueries({
	@NamedQuery(name="TreatmentPlan.findAll", query="SELECT t FROM TreatmentPlan t"),
	@NamedQuery(name="TreatmentPlan.findByClinicalFindingsID", query="SELECT t FROM TreatmentPlan t WHERE t.clinicalFindingBean.fId = :cfId"),
	@NamedQuery(name="TreatmentPlan.findByTreatmentName", query="SELECT t FROM TreatmentPlan t WHERE t.trtName = :trtName")
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

	//bi-directional many-to-one association to MedicineMaster
	@OneToMany(mappedBy="treatmentPlan")
	private List<MedicineMaster> medicineMasters;

	//bi-directional many-to-one association to ClinicalFinding
	@ManyToOne
	@JoinColumn(name="clinical_finding")
	private ClinicalFinding clinicalFindingBean;

	public TreatmentPlan() {
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

	public List<MedicineMaster> getMedicineMasters() {
		return this.medicineMasters;
	}

	public void setMedicineMasters(List<MedicineMaster> medicineMasters) {
		this.medicineMasters = medicineMasters;
	}

	public MedicineMaster addMedicineMaster(MedicineMaster medicineMaster) {
		getMedicineMasters().add(medicineMaster);
		medicineMaster.setTreatmentPlan(this);

		return medicineMaster;
	}

	public MedicineMaster removeMedicineMaster(MedicineMaster medicineMaster) {
		getMedicineMasters().remove(medicineMaster);
		medicineMaster.setTreatmentPlan(null);

		return medicineMaster;
	}

	public ClinicalFinding getClinicalFindingBean() {
		return this.clinicalFindingBean;
	}

	public void setClinicalFindingBean(ClinicalFinding clinicalFindingBean) {
		this.clinicalFindingBean = clinicalFindingBean;
	}

}