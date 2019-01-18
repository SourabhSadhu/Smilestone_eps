package com.my.portal.model;

import java.io.Serializable;
import java.util.List;

public class PrescriptionPrintModel implements Serializable {

	private static final long serialVersionUID = 4711689630197662162L;
	private String name;
	private String sex;
	private String age;
	private String phoneNo;
	private String department; 
	private String doctor;
	private String prescriptionId;
	private String amountTotal;
	private String amountPaid;
	private String amountDue;
	private String regDate;
	private String visitNo;
	private String visitDate;
	private String time;
	private String day;
	private String nextAppointmentDateTime;
	private String chiefComplain;
	private String medicalHistory; 
	private String clinicalFindings;
	private String advice;
	private List<String> medicine;	
/*	private String 
	private String 
	private String 
	private String 
	private String*/
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public String getPrescriptionId() {
		return prescriptionId;
	}
	public void setPrescriptionId(String prescriptionId) {
		this.prescriptionId = prescriptionId;
	}
	public String getAmountTotal() {
		return amountTotal;
	}
	public void setAmountTotal(String amountTotal) {
		this.amountTotal = amountTotal;
	}
	public String getAmountPaid() {
		return amountPaid;
	}
	public void setAmountPaid(String amountPaid) {
		this.amountPaid = amountPaid;
	}
	public String getAmountDue() {
		return amountDue;
	}
	public void setAmountDue(String amountDue) {
		this.amountDue = amountDue;
	}
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	public String getVisitNo() {
		return visitNo;
	}
	public void setVisitNo(String visitNo) {
		this.visitNo = visitNo;
	}
	public String getVisitDate() {
		return visitDate;
	}
	public void setVisitDate(String visitDate) {
		this.visitDate = visitDate;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getNextAppointmentDateTime() {
		return nextAppointmentDateTime;
	}
	public void setNextAppointmentDateTime(String nextAppointmentDateTime) {
		this.nextAppointmentDateTime = nextAppointmentDateTime;
	}
	public String getChiefComplain() {
		return chiefComplain;
	}
	public void setChiefComplain(String chiefComplain) {
		this.chiefComplain = chiefComplain;
	}
	public String getMedicalHistory() {
		return medicalHistory;
	}
	public void setMedicalHistory(String medicalHistory) {
		this.medicalHistory = medicalHistory;
	}
	public String getClinicalFindings() {
		return clinicalFindings;
	}
	public void setClinicalFindings(String clinicalFindings) {
		this.clinicalFindings = clinicalFindings;
	}
	public String getAdvice() {
		return advice;
	}
	public void setAdvice(String advice) {
		this.advice = advice;
	}
	public List<String> getMedicine() {
		return medicine;
	}
	public void setMedicine(List<String> medicine) {
		this.medicine = medicine;
	}
	
	
}
