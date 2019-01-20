package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.FeesBreakup;
import com.my.portal.model.FeesBreakupView;

public interface FeesBreakupService {
	List<FeesBreakupView> findByPatientId(Long patientId);
	List<FeesBreakupView> findByPrescriptionId(Long prescriptionId);
	List<FeesBreakupView> findByClinicalFindingId(Long clinicalFindingId);
	List<FeesBreakupView> findByPatientAndPrescriptionId(Long patientId,Long prescriptionId);
	List<FeesBreakupView> findByFeesBreakupView(Long patientId,Long prescriptionId,Long clinicalFindingId);
	FeesBreakupView findById(Long feesBrealupId);
	FeesBreakupView addFeesBreakup(FeesBreakupView view);
	FeesBreakupView map(FeesBreakup e);
	FeesBreakup map(FeesBreakupView view);
	List<FeesBreakupView> mapAll(List<FeesBreakup> el);
	List<FeesBreakup> map(List<FeesBreakupView> vl);
	FeesBreakupView updateFeePaid(FeesBreakupView view);
}
