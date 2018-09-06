package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;

import com.my.portal.CommonConstants.BloodGroup;


public class PatientView implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -161744595773118043L;
	private Long pId;
	private BloodGroup bloodGroup;
	private BigDecimal contactNo1;
	private BigDecimal contactNo2;
	private BigDecimal discount;
	private BigDecimal dobDd;
	private BigDecimal dobMm;
	private BigDecimal dobYy;
	private String firstName;
	private String lastName;
	private Timestamp tsCreated;
	private Integer weight;
	private byte[] image;
	private String email;
	private String address1;
	private String address2;

	public PatientView() {
	}

	public Long getPId() {
		return this.pId;
	}

	public void setPId(Long pId) {
		this.pId = pId;
	}

	public BloodGroup getBloodGroup() {
		return this.bloodGroup;
	}

	public void setBloodGroup(BloodGroup bloodGroup) {
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

	public final String getEmail() {
		return email;
	}

	public final void setEmail(String email) {
		this.email = email;
	}

	public final String getAddress1() {
		return address1;
	}

	public final void setAddress1(String address1) {
		this.address1 = address1;
	}

	public final String getAddress2() {
		return address2;
	}

	public final void setAddress2(String address2) {
		this.address2 = address2;
	}

}