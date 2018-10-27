package com.my.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.MedicalHistory;

public interface MedicalHistoryRepository extends JpaRepository<MedicalHistory, String>{

	List<MedicalHistory> getByHistoryName(@Param("name") String name);
	List<MedicalHistory> getByPatientId(@Param("patient_id") Long patientId);
	List<MedicalHistory> getByPrescriptionId(@Param("prescription_id") Long prescriptionId);
}
