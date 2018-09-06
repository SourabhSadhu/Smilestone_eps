package com.my.portal.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class DashboardView implements Serializable{
	
	private static final long serialVersionUID = 1885077771464172149L;
	PrescriptionHistoryView pHistory;
	List<FeesBreakupView> fbl;
	List<MedicalHistoryView> mhv;
	List<MedicineHistoryView> medhv;
	
	public PrescriptionHistoryView getpHistory() {
		return pHistory;
	}
	public void setpHistory(PrescriptionHistoryView pHistory) {
		this.pHistory = pHistory;
	}
	public List<FeesBreakupView> getFbl() {
		return null == fbl ? new ArrayList<>() : this.fbl;
	}
	public List<MedicalHistoryView> getMhv() {
		return null == mhv ? new ArrayList<>() : this.mhv;
	}
	public List<MedicineHistoryView> getMedhv() {
		return null == medhv ? new ArrayList<>() : this.medhv;
	}

}
