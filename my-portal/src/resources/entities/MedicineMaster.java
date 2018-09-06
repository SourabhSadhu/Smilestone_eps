package com.my.portal.entities;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the medicine_master database table.
 * List<MedicineMasterView> getMedicineByName (@Param("name") String name);
 * List<MedicineMasterView> getMedicineByAgeGroupId (@Param("ageGrp") String ageGroup);
 * List<MedicineMasterView> getMedicineByTreatmentId (@Param("trtId") BigDecimal trtId);
 * List<MedicineMasterView> getMedicineByDisease (@Param("diseaseName") String diseaseCode);
 * 
 */
@Entity
@Table(name="medicine_master")
@NamedQueries({
	@NamedQuery(name="MedicineMaster.findAll", query="SELECT m FROM MedicineMaster m"),
	@NamedQuery(name="MedicineMaster.getMedicineByName", 
		query="SELECT m FROM MedicineMaster m WHERE m.id.medicineName = :name"),
	@NamedQuery(name="MedicineMaster.getMedicineByAgeGroupId", 
		query="SELECT m FROM MedicineMaster m WHERE m.ageGroupBean.groupId = :ageGrp"),
	@NamedQuery(name="MedicineMaster.getMedicineByTreatmentId", 
		query="SELECT m FROM MedicineMaster m WHERE m.treatmentPlan.trtId = :trtId"),
	@NamedQuery(name="MedicineMaster.getMedicineByDisease", 
		query="SELECT m FROM MedicineMaster m WHERE m.diseaseCode = :diseaseCode"),
	@NamedQuery(name="MedicineMaster.getMedicineByTreatmentNameAndAgeGrp",
		query = "SELECT m FROM MedicineMaster m WHERE m.ageGroupBean.groupId = :ageGrp AND m.treatmentPlan.trtName = :trtmntNames")
})
public class MedicineMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private MedicineMasterPK id;

	@Column(name="clinical_availability")
	private BigDecimal clinicalAvailability;

	@Column(name="disease_code")
	private String diseaseCode;

	@Column(name="disease_name")
	private String diseaseName;

	//bi-directional many-to-one association to AgeGroup
	@ManyToOne
	@JoinColumn(name="age_group", insertable=false, updatable=false)
	private AgeGroup ageGroupBean;

	//bi-directional many-to-one association to TreatmentPlan
	@ManyToOne
	@JoinColumn(name="treatment_id", insertable=false, updatable=false)
	private TreatmentPlan treatmentPlan;

	public MedicineMaster() {
	}

	public MedicineMasterPK getId() {
		return this.id;
	}

	public void setId(MedicineMasterPK id) {
		this.id = id;
	}

	public BigDecimal getClinicalAvailability() {
		return this.clinicalAvailability;
	}

	public void setClinicalAvailability(BigDecimal clinicalAvailability) {
		this.clinicalAvailability = clinicalAvailability;
	}

	public String getDiseaseCode() {
		return this.diseaseCode;
	}

	public void setDiseaseCode(String diseaseCode) {
		this.diseaseCode = diseaseCode;
	}

	public String getDiseaseName() {
		return this.diseaseName;
	}

	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}

	public AgeGroup getAgeGroupBean() {
		return this.ageGroupBean;
	}

	public void setAgeGroupBean(AgeGroup ageGroupBean) {
		this.ageGroupBean = ageGroupBean;
	}

	public TreatmentPlan getTreatmentPlan() {
		return this.treatmentPlan;
	}

	public void setTreatmentPlan(TreatmentPlan treatmentPlan) {
		this.treatmentPlan = treatmentPlan;
	}

}