package com.my.portal.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.my.portal.entities.FeesBreakup;
import com.my.portal.model.FeesBreakupView;

public interface FeesBreakupService {
	List<FeesBreakupView> findByPatientId(@Param("patientId") Long patientId);

	List<FeesBreakupView> findByPrescriptionId(@Param("prescriptionId") Long prescriptionId);

	List<FeesBreakupView> findByClinicalFindingId(@Param("clinicalFindingId") Long clinicalFindingId);

	List<FeesBreakupView> findByPatientAndPrescriptionId(@Param("patientId") Long patientId,
			@Param("prescriptionId") Long prescriptionId);

	List<FeesBreakupView> findByFeesBreakupView(@Param("patientId") Long patientId,
			@Param("prescriptionId") Long prescriptionId, @Param("clinicalFindingId") Long clinicalFindingId);

	FeesBreakupView findById(Long feesBrealupId);

	FeesBreakupView addFeesBreakup(FeesBreakupView view);
	FeesBreakupView map(FeesBreakup e);
	FeesBreakup map(FeesBreakupView view);
	List<FeesBreakupView> mapAll(List<FeesBreakup> el);
	List<FeesBreakup> map(List<FeesBreakupView> vl);
}
