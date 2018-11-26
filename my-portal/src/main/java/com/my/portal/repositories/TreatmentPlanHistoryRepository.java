package com.my.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.my.portal.entities.TreatmentPlanHistory;

@Repository
public interface TreatmentPlanHistoryRepository extends JpaRepository<TreatmentPlanHistory, Long>{

	List<TreatmentPlanHistory> findByPatientId(@Param("patientId") Long patientId);
	List<TreatmentPlanHistory> findByPrescriptionId(@Param("prescriptionId") Long prescriptionId);
	List<TreatmentPlanHistory> findByPatientAndPrescriptionId(@Param("patientId") Long patientId, @Param("prescriptionId") Long prescriptionId);
}
