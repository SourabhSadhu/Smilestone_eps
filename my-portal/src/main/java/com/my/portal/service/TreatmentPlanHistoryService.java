package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.TreatmentPlanHistory;
import com.my.portal.model.TreatmentPlanHistoryView;

public interface TreatmentPlanHistoryService {

	List<TreatmentPlanHistoryView> findByPatientID(Long patientId);
	List<TreatmentPlanHistoryView> findByPrescriptionId(Long prescriptionId);
	List<TreatmentPlanHistoryView> findByPatientAndPrescriptionId(Long patientId, Long prescriptionId);
	TreatmentPlanHistoryView findById(Long id);
	TreatmentPlanHistoryView addTreatmentPlan(TreatmentPlanHistoryView view);
	TreatmentPlanHistoryView map(TreatmentPlanHistory e);
	List<TreatmentPlanHistoryView> mapAll(List<TreatmentPlanHistory> el);
	TreatmentPlanHistory map(TreatmentPlanHistoryView v);
}
