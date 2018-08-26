package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;


/**
 * The persistent class for the age_group database table.
 * 
 */
@Entity
@Table(name="age_group")
@NamedQueries({
		@NamedQuery(name="AgeGroup.findAll", query="SELECT a FROM AgeGroup a"),
		@NamedQuery(name="AgeGroup.findByFromAgeToAge", query="SELECT a FROM AgeGroup a WHERE a.fromAge <= :age AND a.toAge > :age"),
		@NamedQuery(name="AgeGroup.checkByAge", query="SELECT a FROM AgeGroup a WHERE a.fromAge = :fromAge AND a.toAge = :toAge")
		})
public class AgeGroup implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="group_id")
	private String groupId;

	@Column(name="from_age")
	private BigDecimal fromAge;

	@Column(name="to_age")
	private BigDecimal toAge;

	//bi-directional many-to-one association to ClinicalFinding
	@OneToMany(mappedBy="ageGroupBean")
	private List<ClinicalFinding> clinicalFindings;

	//bi-directional many-to-one association to Medicine
	@OneToMany(mappedBy="ageGroupBean")
	private List<MedicineMaster> medicines;

	public AgeGroup() {
	}

	public String getGroupId() {
		return this.groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public BigDecimal getFromAge() {
		return this.fromAge;
	}

	public void setFromAge(BigDecimal fromAge) {
		this.fromAge = fromAge;
	}

	public BigDecimal getToAge() {
		return this.toAge;
	}

	public void setToAge(BigDecimal toAge) {
		this.toAge = toAge;
	}

	public List<ClinicalFinding> getClinicalFindings() {
		return this.clinicalFindings;
	}

	public void setClinicalFindings(List<ClinicalFinding> clinicalFindings) {
		this.clinicalFindings = clinicalFindings;
	}

	public ClinicalFinding addClinicalFinding(ClinicalFinding clinicalFinding) {
		getClinicalFindings().add(clinicalFinding);
		clinicalFinding.setAgeGroupBean(this);

		return clinicalFinding;
	}

	public ClinicalFinding removeClinicalFinding(ClinicalFinding clinicalFinding) {
		getClinicalFindings().remove(clinicalFinding);
		clinicalFinding.setAgeGroupBean(null);

		return clinicalFinding;
	}

	public List<MedicineMaster> getMedicines() {
		return this.medicines;
	}

	public void setMedicines(List<MedicineMaster> medicines) {
		this.medicines = medicines;
	}

	public MedicineMaster addMedicine(MedicineMaster medicine) {
		getMedicines().add(medicine);
		medicine.setAgeGroupBean(this);

		return medicine;
	}

	public MedicineMaster removeMedicine(MedicineMaster medicine) {
		getMedicines().remove(medicine);
		medicine.setAgeGroupBean(null);

		return medicine;
	}

}