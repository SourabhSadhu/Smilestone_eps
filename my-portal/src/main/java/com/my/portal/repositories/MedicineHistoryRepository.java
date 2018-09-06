package com.my.portal.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.MedicineHistory;

public interface MedicineHistoryRepository extends JpaRepository<MedicineHistory, Long>{
	
	List<MedicineHistory> getMedicineHistoryByPatientId(@Param("patientId") BigDecimal patientId);
	List<MedicineHistory> getMedicineHistoryByPrescriptionId(@Param("prescriptionId") BigDecimal prescriptionId);

}
