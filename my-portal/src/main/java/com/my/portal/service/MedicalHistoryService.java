package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.MedicalHistory;
import com.my.portal.model.MedicalHistoryView;

public interface MedicalHistoryService {
	
	List<MedicalHistoryView> findAll();
	List<MedicalHistoryView> getByPatientId(Long id);
	List<MedicalHistoryView> getByPrescriptionId(Long id);
	List<MedicalHistoryView> getByMedicalHistoryName(String name);
	MedicalHistoryView addMedicalHistory(MedicalHistoryView view);
	MedicalHistoryView map(MedicalHistory e);
	MedicalHistory map(MedicalHistoryView v);
	List<MedicalHistoryView> mapAll(List<MedicalHistory> el);
	List<MedicalHistory> map(List<MedicalHistoryView> vl);
}
