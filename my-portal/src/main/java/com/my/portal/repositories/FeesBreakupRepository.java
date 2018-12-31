package com.my.portal.repositories;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.FeesBreakup;

public interface FeesBreakupRepository extends JpaRepository<FeesBreakup, Long> {

	List<FeesBreakup> findByPatientId(@Param("patientId") Long patientId);

	List<FeesBreakup> findByPrescriptionId(@Param("prescriptionId") Long prescriptionId);

	List<FeesBreakup> findByClinicalFindingId(@Param("clinicalFindingId") Long clinicalFindingId);

	List<FeesBreakup> findByPatientAndPrescriptionId(@Param("patientId") Long patientId,
			@Param("prescriptionId") Long prescriptionId);

	List<FeesBreakup> findByFeesBreakup(@Param("patientId") Long patientId,
			@Param("prescriptionId") Long prescriptionId, @Param("clinicalFindingId") Long clinicalFindingId);
	
}
