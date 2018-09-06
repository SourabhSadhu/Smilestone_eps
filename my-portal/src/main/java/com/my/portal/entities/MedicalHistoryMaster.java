package com.my.portal.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


/**
 * The persistent class for the medical_history_master database table.
 * 
 */
@Entity
@Table(name="medical_history_master")
@NamedQuery(name="MedicalHistoryMaster.findAll", query="SELECT m FROM MedicalHistoryMaster m")
public class MedicalHistoryMaster implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name="medical_history_name")
	private String medicalHistoryName;

	public MedicalHistoryMaster() {
	}

	public String getMedicalHistoryName() {
		return this.medicalHistoryName;
	}

	public void setMedicalHistoryName(String medicalHistoryName) {
		this.medicalHistoryName = medicalHistoryName;
	}

}