package com.my.portal.model;

import java.io.Serializable;
import java.util.List;

public class TreatmentPlanView implements Serializable {

	private static final long serialVersionUID = 2545204689598917896L;
	private Long trtId;
	private String trtDesc;
	private String trtName;
	private List<MedicineMasterView> medicines;
	private ClinicalFindingView clinicalFindingBean;
	private long clinicalFindingId;

	public TreatmentPlanView() {
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

	public List<MedicineMasterView> getMedicines() {
		return this.medicines;
	}

	public void setMedicines(List<MedicineMasterView> medicines) {
		this.medicines = medicines;
	}

	public MedicineMasterView addMedicine(MedicineMasterView medicine) {
		getMedicines().add(medicine);
		medicine.setTreatmentPlan(this);

		return medicine;
	}

	public MedicineMasterView removeMedicine(MedicineMasterView medicine) {
		getMedicines().remove(medicine);
		medicine.setTreatmentPlan(null);

		return medicine;
	}

	public ClinicalFindingView getClinicalFindingBean() {
		return this.clinicalFindingBean;
	}

	public void setClinicalFindingBean(ClinicalFindingView clinicalFindingBean) {
		this.clinicalFindingBean = clinicalFindingBean;
	}

	public long getClinicalFindingId() {
		return clinicalFindingId;
	}

	public void setClinicalFindingId(long clinicalFindingId) {
		this.clinicalFindingId = clinicalFindingId;
	}

	
}