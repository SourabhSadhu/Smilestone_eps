package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.MedicalHistoryMaster;
import com.my.portal.model.MedicalHistoryMasterView;

public interface MedicalHistoryMasterService {
	
	List<MedicalHistoryMasterView> getMedicalHistoryMaster();
	boolean isMedicalHistoryAvailable(String name);
	MedicalHistoryMasterView addMedicalHistoryMaster(MedicalHistoryMasterView master);
	MedicalHistoryMaster map(MedicalHistoryMasterView v);
	MedicalHistoryMasterView map(MedicalHistoryMaster e);
	List<MedicalHistoryMasterView> mapAll(List<MedicalHistoryMaster> el);
}
