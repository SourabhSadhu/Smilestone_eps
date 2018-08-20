package com.my.portal.service;

import java.math.BigDecimal;
import java.util.List;

import com.my.portal.entities.Patient;

public interface PatientService {

	List<Patient> findByFirstName(String fName);
	List<Patient> findByLastName(String lName);
	List<Patient> findByFullName(String fName, String lName);
	List<Patient> findByDOB(BigDecimal dd, BigDecimal mm, BigDecimal yy);
	List<Patient> findByDetails(String fName, String lName, BigDecimal dd, BigDecimal mm, BigDecimal yy);
	List<Patient> findByContactNo(BigDecimal cNo);
	Patient addPatient(Patient p);
	List<Patient> getPatient(Patient p);
}
