package com.my.portal.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class DashboardView implements Serializable{
	
	private static final long serialVersionUID = 1885077771464172149L;
	PrescriptionHistoryView pHistory;
	PatientView patientView;
	List<FeesBreakupView> fbl;
	List<MedicalHistoryView> mhv;
	List<MedicineHistoryView> medhv;
	List<TreatmentPlanHistoryView> tphv;
	
	public PrescriptionHistoryView getpHistory() {
		return pHistory;
	}
	public void setpHistory(PrescriptionHistoryView pHistory) {
		this.pHistory = pHistory;
	}
	public final PatientView getPatientView() {
		return patientView;
	}
	public final void setPatientView(PatientView patientView) {
		this.patientView = patientView;
	}
	public List<FeesBreakupView> getFbl() {
		if(null == this.fbl){
			this.fbl = new ArrayList<>();
		}
		return this.fbl;
	}
	public List<MedicalHistoryView> getMhv() {
		if(null == this.mhv){
			this.mhv = new ArrayList<>();
		}
		return this.mhv;
	}
	public List<MedicineHistoryView> getMedhv() {
		if(null == this.medhv){
			this.medhv = new ArrayList<>();
		}
		return this.medhv;
	}
	public List<TreatmentPlanHistoryView> getTphv() {
		if(null == this.tphv){
			this.tphv = new ArrayList<>();
		}
		return this.tphv;
	}

}
