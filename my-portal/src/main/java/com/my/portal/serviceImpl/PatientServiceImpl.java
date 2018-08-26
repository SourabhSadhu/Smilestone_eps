package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.my.portal.CommonConstants.BloodGroup;
import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.Patient;
import com.my.portal.model.PatientView;
import com.my.portal.repositories.PatientRespository;
import com.my.portal.service.PatientService;

@Service
public class PatientServiceImpl implements PatientService{
	
	private final Logger log = LoggerFactory.getLogger(getClass());
	@Autowired PatientRespository repo;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByFirstName(String fName) {
		return map(repo.findByFirstName(fName));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByLastName(String lName) {
		return map(repo.findByLastName(lName));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByFullName(String fName, String lName) {
		return map(repo.findByFullName(fName, lName));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByDOB(BigDecimal dd, BigDecimal mm, BigDecimal yy) {
		return map(repo.findByDOB(dd, mm, yy));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByDetails(String fName, String lName, BigDecimal dd, BigDecimal mm, BigDecimal yy) {
		return map(repo.findByDetails(fName, lName, dd, mm, yy));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByContactNo(BigDecimal cNo) {
		return map(repo.findByContactNo(cNo));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public PatientView addPatient(PatientView p) {
		if(StringUtils.hasText(p.getFirstName()) 
				&& StringUtils.hasText(p.getLastName())
				&& null != p.getContactNo1()
				&& null != p.getDobDd()
				&& null != p.getDobMm()
				&& null != p.getDobYy()
				&& p.getDobDd().compareTo(new BigDecimal(32)) < 1
				&& p.getDobMm().compareTo(new BigDecimal(13)) < 1				
				) {			
			return map(repo.saveAndFlush(map(p)));
		}else {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
	}

	@Override
	public List<PatientView> getPatient(PatientView p) {
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
		} else if((null != p.getContactNo1() && BigDecimal.ZERO.compareTo(p.getContactNo1()) != 0) ||
				(null != p.getContactNo2() && BigDecimal.ZERO.compareTo(p.getContactNo2()) != 0) 
				){
			if(null != p.getContactNo1()){
				return findByContactNo(p.getContactNo1());
			}else{
				return findByContactNo(p.getContactNo2());
			}
		}else {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
	}

	@Override
	public PatientView map(Patient p){
		PatientView pv = new PatientView();
		if(null != p){
			pv.setContactNo1(p.getContactNo1());
			pv.setContactNo2(p.getContactNo2());
			pv.setDiscount(p.getDiscount());
			pv.setDobDd(p.getDobDd());
			pv.setDobMm(p.getDobMm());
			pv.setDobYy(p.getDobYy());
			pv.setFirstName(p.getFirstName());
			pv.setLastName(p.getLastName());
			pv.setPId(p.getPId());			
			pv.setTsCreated(p.getTsCreated());
			pv.setWeight(p.getWeight());
			if(StringUtils.hasText(p.getBloodGroup())){
				pv.setBloodGroup(BloodGroup.valueOf(p.getBloodGroup()));
			}
		}
		return pv;
	}
	
	@Override
	public List<PatientView> map(List<Patient> pList){
		List<PatientView> pvList = new ArrayList<>();
		if(null != pList && !pList.isEmpty()){
			for(Patient p : pList){
				pvList.add(map(p));
			}
		}
		return pvList;
	}
	
	@Override
	public Patient map(PatientView pv){
		Patient p = new Patient();
		if(null != pv){
			p.setFirstName(p.getFirstName().toLowerCase());
			p.setLastName(p.getLastName().toLowerCase());
			p.setDobDd(p.getDobDd());
			p.setDobMm(p.getDobMm());
			p.setDobYy(p.getDobYy());
			p.setContactNo1(p.getContactNo1());
			p.setContactNo2(p.getContactNo2());
			p.setDiscount(p.getDiscount());
			p.setWeight(pv.getWeight());
			if(null != pv.getBloodGroup()){
				p.setBloodGroup(pv.getBloodGroup().getBloodGroup());
			}
			p.setTsCreated(new Timestamp(System.currentTimeMillis()));
		}
		return p;
	}
}
