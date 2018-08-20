package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the medicines database table.
 * 
 */
@Entity
@Table(name="medicines")
@NamedQuery(name="Medicine.findAll", query="SELECT m FROM Medicine m")
public class Medicine implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private MedicinePK id;

	@Column(name="clinical_availability")
	private BigDecimal clinicalAvailability;

	@Column(name="disease_name")
	private String diseaseName;

	private String dosage;

	//bi-directional many-to-one association to AgeGroup
	@ManyToOne
	@JoinColumn(name="age_group", insertable=false, updatable=false)
	private AgeGroup ageGroupBean;

	//bi-directional many-to-one association to TreatmentPlan
	@ManyToOne
	@JoinColumn(name="treatment_id")
	private TreatmentPlan treatmentPlan;

	public Medicine() {
	}

	public MedicinePK getId() {
		return this.id;
	}

	public void setId(MedicinePK id) {
		this.id = id;
	}

	public BigDecimal getClinicalAvailability() {
		return this.clinicalAvailability;
	}

	public void setClinicalAvailability(BigDecimal clinicalAvailability) {
		this.clinicalAvailability = clinicalAvailability;
	}

	public String getDiseaseName() {
		return this.diseaseName;
	}

	public void setDiseaseName(String diseaseName) {
		this.diseaseName = diseaseName;
	}

	public String getDosage() {
		return this.dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
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