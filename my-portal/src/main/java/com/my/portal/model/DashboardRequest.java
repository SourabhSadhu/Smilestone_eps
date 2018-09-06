package com.my.portal.model;

import java.io.Serializable;

public class DashboardRequest implements Serializable{

	private static final long serialVersionUID = -1244056809605145601L;
	String firstName;
	String lastName;
	long contactNo;
	long dobDd;
	long dobMm;
	long dobYy;
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public long getDobDd() {
		return dobDd;
	}
	public void setDobDd(long dobDd) {
		this.dobDd = dobDd;
	}
	public long getDobMm() {
		return dobMm;
	}
	public void setDobMm(long dobMm) {
		this.dobMm = dobMm;
	}
	public long getDobYy() {
		return dobYy;
	}
	public void setDobYy(long dobYy) {
		this.dobYy = dobYy;
	}
	
	
}
