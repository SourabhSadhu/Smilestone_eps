package com.my.portal.service;

import java.math.BigDecimal;
import java.util.List;

import com.my.portal.entities.Patient;
import com.my.portal.model.PatientView;

public interface PatientService {

	List<PatientView> findByFirstName(String fName);
	List<PatientView> findByLastName(String lName);
	List<PatientView> findByFullName(String fName, String lName);
	List<PatientView> findByDOB(BigDecimal dd, BigDecimal mm, BigDecimal yy);
	List<PatientView> findByDetails(String fName, String lName, BigDecimal dd, BigDecimal mm, BigDecimal yy);
	List<PatientView> findByContactNo(BigDecimal cNo);
	PatientView findById(Long pId);
	PatientView addPatient(PatientView p);
	List<PatientView> getPatient(PatientView p);
	PatientView map(Patient p);
	List<PatientView> mapAll(List<Patient> pList);
	Patient map(PatientView pv);
}
