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
@NamedQuery(name="TreatmentPlan.findAll", query="SELECT t FROM TreatmentPlan t")
public class TreatmentPlan implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="trt_id")
	private Long trtId;

	@Column(name="trt_desc")
	private String trtDesc;

	@Column(name="trt_name")
	private String trtName;

	//bi-directional many-to-one association to Medicine
	@OneToMany(mappedBy="treatmentPlan")
	private List<Medicine> medicines;

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

	public List<Medicine> getMedicines() {
		return this.medicines;
	}

	public void setMedicines(List<Medicine> medicines) {
		this.medicines = medicines;
	}

	public Medicine addMedicine(Medicine medicine) {
		getMedicines().add(medicine);
		medicine.setTreatmentPlan(this);

		return medicine;
	}

	public Medicine removeMedicine(Medicine medicine) {
		getMedicines().remove(medicine);
		medicine.setTreatmentPlan(null);

		return medicine;
	}

	public ClinicalFinding getClinicalFindingBean() {
		return this.clinicalFindingBean;
	}

	public void setClinicalFindingBean(ClinicalFinding clinicalFindingBean) {
		this.clinicalFindingBean = clinicalFindingBean;
	}

}