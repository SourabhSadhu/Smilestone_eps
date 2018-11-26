package com.my.portal.service;

import java.math.BigDecimal;
import java.util.List;

import com.my.portal.entities.MedicineHistory;
import com.my.portal.entities.MedicineMaster;
import com.my.portal.model.MedicineHistoryView;
import com.my.portal.model.MedicineMasterView;

public interface MedicineService {
	
	List<MedicineMasterView> getMedicineByName (String name);
	List<MedicineMasterView> getMedicineByAgeGroupId (String ageGroup);
	List<MedicineMasterView> getMedicineByTreatmentId (BigDecimal trtId);
	List<MedicineMasterView> getMedicineByDisease (String diseaseCode);
	List<MedicineMasterView> getMedicineByTreatmentNameAndAgeGrp (Long trtmntId, String ageGrp);
	List<MedicineMasterView> getMedicineByTreatmentNameAndAge (Long trtmntId, String age);
	List<MedicineMasterView> getAll();
	MedicineMasterView addMedicine (MedicineMasterView v);
	MedicineMaster map(MedicineMasterView v);
	MedicineMasterView map(MedicineMaster e);
	List<MedicineMasterView> map(List<MedicineMaster> el);
	
	MedicineHistoryView addMedicineHistory(MedicineHistoryView e);
	List<MedicineHistoryView> getMedicineHistoryByPatientId(Long patientId);
	List<MedicineHistoryView> getMedicineHistoryByPrescriptionId(Long prescriptionId);
	MedicineHistoryView getMedicineHistoryById(Long id);
	MedicineHistoryView map(MedicineHistory e);
	MedicineHistory map(MedicineHistoryView v);
	List<MedicineHistoryView> mapAll(List<MedicineHistory> el);
	List<MedicineHistory> mapEntities(List<MedicineHistoryView> vl);
}
