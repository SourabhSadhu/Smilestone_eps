package com.my.portal.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.Patient;

public interface PatientRespository extends JpaRepository<Patient, Long> {
	
	List<Patient> findByFirstName(@Param("fName") String fName);
	List<Patient> findByLastName(@Param("lName") String lName);
	List<Patient> findByFullName(@Param("fName") String fName, @Param("lName") String lName);
	List<Patient> findByDOB(@Param("dd")BigDecimal dd, @Param("mm")BigDecimal mm, @Param("yy")BigDecimal yy);
	List<Patient> findByDetails(@Param("fName") String fName, @Param("lName") String lName, @Param("dd")BigDecimal dd, @Param("mm")BigDecimal mm, @Param("yy")BigDecimal yy);
	List<Patient> findByContactNo(@Param("cNo")BigDecimal cNo);
}
