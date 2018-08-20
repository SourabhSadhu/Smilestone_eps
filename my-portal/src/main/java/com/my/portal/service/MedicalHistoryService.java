package com.my.portal.service;

import java.util.List;

import com.my.portal.model.MedicalHistoryView;

public interface MedicalHistoryService {
	
	List<MedicalHistoryView> getMedicalHistory();
	MedicalHistoryView addMedicalHistory(MedicalHistoryView view);
}
