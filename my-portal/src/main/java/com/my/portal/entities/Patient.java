package com.my.portal.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


/**
 * The persistent class for the patients database table.
 * 
 */
@Entity
@Table(name="patients")
@SequenceGenerator(name="PATIENTS_PID_GENERATOR", sequenceName="patient_id_seq")
@NamedQueries({
	@NamedQuery(name="Patient.findByFirstName", query="SELECT p FROM Patient p WHERE lower(p.firstName) like(:fName)"),
	@NamedQuery(name="Patient.findByLastName", query="SELECT p FROM Patient p WHERE lower(p.lastName) LIKE( :lName )"),
	@NamedQuery(name="Patient.findByFullName", query="SELECT p FROM Patient p WHERE lower(p.firstName) like(:fName) "+
			"AND lower(p.lastName) like(:lName)"),
	@NamedQuery(name="Patient.findByDOB", query="SELECT p FROM Patient p WHERE p.dobDd = :dd AND p.dobMm = :mm AND p.dobYy = :yy"),
	@NamedQuery(name="Patient.findByDetails", query="SELECT p FROM Patient p WHERE p.firstName = :fName AND p.lastName = :lName "
						+"AND p.dobDd = :dd AND p.dobMm = :mm AND p.dobYy = :yy"),
	@NamedQuery(name="Patient.findByContactNo", query="SELECT p FROM Patient p WHERE p.contactNo1 = :cNo OR p.contactNo2 = :cNo")
})
public class Patient implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
//	@SequenceGenerator(name="PATIENTS_PID_GENERATOR", sequenceName="patient_id_seq")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PATIENTS_PID_GENERATOR")
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
	
	private byte[] image;

	private String email;
	private String address1;
	private String address2;
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
	
	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public Long getpId() {
		return pId;
	}

	public void setpId(Long pId) {
		this.pId = pId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

}