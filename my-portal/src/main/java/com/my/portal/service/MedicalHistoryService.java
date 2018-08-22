package com.my.portal.service;

import java.util.List;

import com.my.portal.model.MedicalHistoryView;

public interface MedicalHistoryService {
	
	List<MedicalHistoryView> getAllMedicalHistory();
	List<MedicalHistoryView> getByPatientId(Long id);
	List<MedicalHistoryView> getByMedicalHistoryName(String name);
	MedicalHistoryView addMedicalHistory(MedicalHistoryView view);
	List<String> getAllMedicalHistoryMaster();
}
