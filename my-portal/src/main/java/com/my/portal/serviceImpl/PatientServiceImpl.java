package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.my.portal.ValidationException;
import com.my.portal.entities.Patient;
import com.my.portal.model.ErrorCode;
import com.my.portal.repositories.PatientRespository;
import com.my.portal.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService{
	
	private final Logger log = LoggerFactory.getLogger(getClass());
	@Autowired PatientRespository repo;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<Patient> findByFirstName(String fName) {
		return repo.findByFirstName(fName);
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<Patient> findByLastName(String lName) {
		return repo.findByLastName(lName);
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<Patient> findByFullName(String fName, String lName) {
		return repo.findByFullName(fName, lName);
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<Patient> findByDOB(BigDecimal dd, BigDecimal mm, BigDecimal yy) {
		return repo.findByDOB(dd, mm, yy);
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<Patient> findByDetails(String fName, String lName, BigDecimal dd, BigDecimal mm, BigDecimal yy) {
		return repo.findByDetails(fName, lName, dd, mm, yy);
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<Patient> findByContactNo(BigDecimal cNo) {
		return repo.findByContactNo(cNo);
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public Patient addPatient(Patient p) {
		if(StringUtils.hasText(p.getFirstName()) 
				&& StringUtils.hasText(p.getLastName())
				&& null != p.getContactNo1()
				&& null != p.getDobDd()
				&& null != p.getDobMm()
				&& null != p.getDobYy()
				&& p.getDobDd().compareTo(new BigDecimal(32)) < 1
				&& p.getDobMm().compareTo(new BigDecimal(13)) < 1				
				) {
			Patient p1 = new Patient();
			p1.setFirstName(p.getFirstName().toLowerCase());
			p1.setLastName(p.getLastName().toLowerCase());
			p1.setDobDd(p.getDobDd());
			p1.setDobMm(p.getDobMm());
			p1.setDobYy(p.getDobYy());
			p1.setContactNo1(p.getContactNo1());
			p1.setContactNo2(p.getContactNo2());
			p1.setDiscount(p.getDiscount());
			p1.setTsCreated(new Timestamp(System.currentTimeMillis()));
			return repo.saveAndFlush(p1);
		}else {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
	}

	@Override
	public List<Patient> getPatient(Patient p) {
		if (null != p.getDobDd() && null != p.getDobMm() && null != p.getDobYy()
				&& (StringUtils.isEmpty(p.getFirstName()) || StringUtils.isEmpty(p.getLastName()))) {
			return findByDOB(p.getDobDd(), p.getDobMm(), p.getDobYy());
		} else if (null != p.getDobDd() && null != p.getDobMm() && null != p.getDobYy()
				&& StringUtils.hasText(p.getFirstName()) && StringUtils.hasText(p.getLastName())) {
			return findByDetails(p.getFirstName(), p.getLastName(), p.getDobDd(), p.getDobMm(), p.getDobYy());
		} else if (StringUtils.hasText(p.getFirstName()) && StringUtils.hasText(p.getLastName())) {
			return findByFullName(p.getFirstName().toLowerCase(), p.getLastName().toLowerCase());
		} else if (StringUtils.hasText(p.getFirstName())) {
			return findByFirstName(p.getFirstName().toLowerCase());
		} else if (StringUtils.hasText(p.getLastName())) {
			return findByLastName(p.getLastName().toLowerCase());
		} else {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
	}

	
}
