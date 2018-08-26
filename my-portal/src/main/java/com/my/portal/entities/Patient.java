package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;



/**
 * The persistent class for the patients database table.
 * 
 */
@Entity
@Table(name="patients")
@NamedQueries({
	@NamedQuery(name="Patient.findByFirstName", query="SELECT p FROM Patient p WHERE p.firstName = :fName"),
	@NamedQuery(name="Patient.findByLastName", query="SELECT p FROM Patient p WHERE p.lastName = :lName"),
	@NamedQuery(name="Patient.findByFullName", query="SELECT p FROM Patient p WHERE p.firstName = :fName AND  p.lastName = :lName"),
	@NamedQuery(name="Patient.findByDOB", query="SELECT p FROM Patient p WHERE p.dobDd = :dd AND p.dobMm = :mm AND p.dobYy = :yy"),
	@NamedQuery(name="Patient.findByDetails", query="SELECT p FROM Patient p WHERE p.firstName = :fName AND p.lastName = :lName "
						+"AND p.dobDd = :dd AND p.dobMm = :mm AND p.dobYy = :yy"),
	@NamedQuery(name="Patient.findByContactNo", query="SELECT p FROM Patient p WHERE p.contactNo1 = :cNo OR p.contactNo2 = :cNo")
})
public class Patient implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="p_id")
	private Long pId;

	@Column(name="blood_group")
	private String bloodGroup;

	@Column(name="contact_no1")
	private BigDecimal contactNo1;

	@Column(name="contact_no2")
	private BigDecimal contactNo2;

	private BigDecimal discount;

	@Column(name="dob_dd")
	private BigDecimal dobDd;

	@Column(name="dob_mm")
	private BigDecimal dobMm;

	@Column(name="dob_yy")
	private BigDecimal dobYy;

	@Column(name="first_name")
	private String firstName;

	@Column(name="last_name")
	private String lastName;

	@Column(name="ts_created")
	private Timestamp tsCreated;

	private Integer weight;

	//bi-directional many-to-one association to FeesBreakup
	@OneToMany(mappedBy="patient")
	private List<FeesBreakup> feesBreakups;

	//bi-directional many-to-one association to MedicalHistory
	@OneToMany(mappedBy="patient")
	private List<MedicalHistory> medicalHistories;

	//bi-directional many-to-one association to MedicineHistory
	@OneToMany(mappedBy="patient")
	private List<MedicineHistory> medicineHistories;

	//bi-directional many-to-one association to PrescriptionHistory
	@OneToMany(mappedBy="patient")
	private List<PrescriptionHistory> prescriptionHistories;

	public Patient() {
	}

	public Long getPId() {
		return this.pId;
	}

	public void setPId(Long pId) {
		this.pId = pId;
	}

	public String getBloodGroup() {
		return this.bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public BigDecimal getContactNo1() {
		return this.contactNo1;
	}

	public void setContactNo1(BigDecimal contactNo1) {
		this.contactNo1 = contactNo1;
	}

	public BigDecimal getContactNo2() {
		return this.contactNo2;
	}

	public void setContactNo2(BigDecimal contactNo2) {
		this.contactNo2 = contactNo2;
	}

	public BigDecimal getDiscount() {
		return this.discount;
	}

	public void setDiscount(BigDecimal discount) {
		this.discount = discount;
	}

	public BigDecimal getDobDd() {
		return this.dobDd;
	}

	public void setDobDd(BigDecimal dobDd) {
		this.dobDd = dobDd;
	}

	public BigDecimal getDobMm() {
		return this.dobMm;
	}

	public void setDobMm(BigDecimal dobMm) {
		this.dobMm = dobMm;
	}

	public BigDecimal getDobYy() {
		return this.dobYy;
	}

	public void setDobYy(BigDecimal dobYy) {
		this.dobYy = dobYy;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Timestamp getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Integer getWeight() {
		return this.weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public List<FeesBreakup> getFeesBreakups() {
		return this.feesBreakups;
	}

	public void setFeesBreakups(List<FeesBreakup> feesBreakups) {
		this.feesBreakups = feesBreakups;
	}

	public FeesBreakup addFeesBreakup(FeesBreakup feesBreakup) {
		getFeesBreakups().add(feesBreakup);
		feesBreakup.setPatient(this);

		return feesBreakup;
	}

	public FeesBreakup removeFeesBreakup(FeesBreakup feesBreakup) {
		getFeesBreakups().remove(feesBreakup);
		feesBreakup.setPatient(null);

		return feesBreakup;
	}

	public List<MedicalHistory> getMedicalHistories() {
		return this.medicalHistories;
	}

	public void setMedicalHistories(List<MedicalHistory> medicalHistories) {
		this.medicalHistories = medicalHistories;
	}

	public MedicalHistory addMedicalHistory(MedicalHistory medicalHistory) {
		getMedicalHistories().add(medicalHistory);
		medicalHistory.setPatient(this);

		return medicalHistory;
	}

	public MedicalHistory removeMedicalHistory(MedicalHistory medicalHistory) {
		getMedicalHistories().remove(medicalHistory);
		medicalHistory.setPatient(null);

		return medicalHistory;
	}

	public List<MedicineHistory> getMedicineHistories() {
		return this.medicineHistories;
	}

	public void setMedicineHistories(List<MedicineHistory> medicineHistories) {
		this.medicineHistories = medicineHistories;
	}

	public MedicineHistory addMedicineHistory(MedicineHistory medicineHistory) {
		getMedicineHistories().add(medicineHistory);
		medicineHistory.setPatient(this);

		return medicineHistory;
	}

	public MedicineHistory removeMedicineHistory(MedicineHistory medicineHistory) {
		getMedicineHistories().remove(medicineHistory);
		medicineHistory.setPatient(null);

		return medicineHistory;
	}

	public List<PrescriptionHistory> getPrescriptionHistories() {
		return this.prescriptionHistories;
	}

	public void setPrescriptionHistories(List<PrescriptionHistory> prescriptionHistories) {
		this.prescriptionHistories = prescriptionHistories;
	}

	public PrescriptionHistory addPrescriptionHistory(PrescriptionHistory prescriptionHistory) {
		getPrescriptionHistories().add(prescriptionHistory);
		prescriptionHistory.setPatient(this);

		return prescriptionHistory;
	}

	public PrescriptionHistory removePrescriptionHistory(PrescriptionHistory prescriptionHistory) {
		getPrescriptionHistories().remove(prescriptionHistory);
		prescriptionHistory.setPatient(null);

		return prescriptionHistory;
	}

}