package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.MedicalHistoryMaster;

public interface MedicalHistoryMasterService {
	
	List<MedicalHistoryMaster> getMedicalHistoryMaster();
	boolean isMedicalHistoryAvailable(String name);
	MedicalHistoryMaster addMedicalHistoryMaster(MedicalHistoryMaster master);
}
