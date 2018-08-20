package com.my.portal.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;


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
		return tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
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