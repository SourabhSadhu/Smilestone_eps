package com.my.portal.repositories;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.PrescriptionHistory;

public interface PrescriptionHistoryRespository extends JpaRepository<PrescriptionHistory, Long> {
	
	List<PrescriptionHistory> findByPatientId(@Param("patientId") Long patientId);
	Long getCountByPatientId(@Param("patientId") Long patientId);
	List<PrescriptionHistory> findAllByPatientId(@Param("patientId") Long patientId, Pageable pageable);
	PrescriptionHistory findByPrescriptionAndPatientId(@Param("patientId") Long patientId, @Param("prescriptionId") Long prescriptionId);
	List<PrescriptionHistory> getByDateRange(@Param("startDate") Timestamp startDate, @Param("endDate") Timestamp endDate);	
	@Modifying
	void updateVisitCount(@Param("visitCount") long visitCount, @Param("prescriptionId") Long prescriptionId);
}
