package com.my.portal.model;

import java.io.Serializable;

public class DashboardResponse implements Serializable{

	private static final long serialVersionUID = -1244056809605145601L;
	long prescriptionId;
	long patientId;
	boolean status;
	String respMsg;
	public final long getPrescriptionId() {
		return prescriptionId;
	}
	public final void setPrescriptionId(long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}
	public final long getPatientId() {
		return patientId;
	}
	public final void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public final boolean isStatus() {
		return status;
	}
	public final void setStatus(boolean status) {
		this.status = status;
	}
	public final String getRespMsg() {
		return respMsg;
	}
	public final void setRespMsg(String respMsg) {
		this.respMsg = respMsg;
	}
	
}
