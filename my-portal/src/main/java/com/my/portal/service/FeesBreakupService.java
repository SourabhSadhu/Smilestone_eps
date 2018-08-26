package com.my.portal.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

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
}
