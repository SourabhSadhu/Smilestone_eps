package com.my.portal.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;


public class PatientView implements Serializable {

	private static final long serialVersionUID = -3439715817276863931L;
	private Long pId;
	private BigDecimal contactNo1;
	private BigDecimal contactNo2;
	private BigDecimal discount;
	private BigDecimal dobDd;
	private BigDecimal dobMm;
	private BigDecimal dobYy;
	private String firstName;
	private String lastName;
	private Timestamp tsCreated;
//	private List<PrescriptionHistoryView> prescriptionHistories;
//	private List<MedicalHistoryView> medicalHistories;

	public PatientView() {
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
		return this.tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

//	public List<PrescriptionHistoryView> getPrescriptionHistories() {
//		return this.prescriptionHistories;
//	}
//
//	public void setPrescriptionHistories(List<PrescriptionHistoryView> prescriptionHistories) {
//		this.prescriptionHistories = prescriptionHistories;
//	}
//
//	public PrescriptionHistoryView addPrescriptionHistory(PrescriptionHistoryView prescriptionHistory) {
//		getPrescriptionHistories().add(prescriptionHistory);
//		prescriptionHistory.setPatient(this);
//
//		return prescriptionHistory;
//	}
//
//	public PrescriptionHistoryView removePrescriptionHistory(PrescriptionHistoryView prescriptionHistory) {
//		getPrescriptionHistories().remove(prescriptionHistory);
//		prescriptionHistory.setPatient(null);
//
//		return prescriptionHistory;
//	}
//
//	public List<MedicalHistoryView> getMedicalHistories() {
//		return this.medicalHistories;
//	}
//
//	public void setMedicalHistories(List<MedicalHistoryView> medicalHistories) {
//		this.medicalHistories = medicalHistories;
//	}
//
//	public MedicalHistoryView addMedicalHistory(MedicalHistoryView medicalHistory) {
//		getMedicalHistories().add(medicalHistory);
//		medicalHistory.setPatient(this);
//
//		return medicalHistory;
//	}
//
//	public MedicalHistoryView removeMedicalHistory(MedicalHistoryView medicalHistory) {
//		getMedicalHistories().remove(medicalHistory);
//		medicalHistory.setPatient(null);
//
//		return medicalHistory;
//	}
}