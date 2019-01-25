package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

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
		return mapAll(repo.findByFirstName(likedQuery(fName)));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByLastName(String lName) {
		return mapAll(repo.findByLastName(likedQuery(lName)));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByFullName(String fName, String lName) {
		return mapAll(repo.findByFullName(likedQuery(fName), likedQuery(lName)));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByDOB(BigDecimal dd, BigDecimal mm, BigDecimal yy) {
		return mapAll(repo.findByDOB(dd, mm, yy));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByDetails(String fName, String lName, BigDecimal dd, BigDecimal mm, BigDecimal yy) {
		return mapAll(repo.findByDetails(fName, lName, dd, mm, yy));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PatientView> findByContactNo(BigDecimal cNo) {
		return mapAll(repo.findByContactNo(cNo));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public PatientView addPatient(PatientView p) {
		if(StringUtils.isEmpty(p.getFirstName())) {
			throw new ValidationException(ErrorCode.BLANK_FIRST_NAME);
		}else if(StringUtils.isEmpty(p.getLastName())) {
			throw new ValidationException(ErrorCode.BLANK_LAST_NAME);			
		}else if(StringUtils.isEmpty(p.getContactNo1())) {
			throw new ValidationException(ErrorCode.BLANK_CONTACT_NUMBER);			
		}else if(StringUtils.isEmpty(p.getDobTimestamp())) {
			throw new ValidationException(ErrorCode.BLANK_DOB);			
		}else if(p.getDobDd().compareTo(new BigDecimal(31)) > 0
				&& p.getDobMm().compareTo(new BigDecimal(12)) > 1){
			throw new ValidationException(ErrorCode.INVALID_DOB);
		}else {
			return map(repo.saveAndFlush(map(p)));
		}
	}

	
	@Override
	public PatientView findById(Long pId) {
		return map(repo.findOne(pId));
	}

	@Override
	public List<PatientView> getPatient(PatientView p) {
		List<PatientView> resp = new ArrayList<>();

		if(null != p.getPId() && p.getPId().longValue() > 0) {
			resp.add(this.findById(p.getPId()));		
		}else if (null != p.getDobDd() && null != p.getDobMm() && null != p.getDobYy()
				&& (StringUtils.isEmpty(p.getFirstName()) || StringUtils.isEmpty(p.getLastName()))) {
			resp.addAll(findByDOB(p.getDobDd(), p.getDobMm(), p.getDobYy()));
		} else if (null != p.getDobDd() && null != p.getDobMm() && null != p.getDobYy()
				&& StringUtils.hasText(p.getFirstName()) && StringUtils.hasText(p.getLastName())) {
			resp.addAll(findByDetails(p.getFirstName(), p.getLastName(), p.getDobDd(), p.getDobMm(), p.getDobYy()));
		} else if (StringUtils.hasText(p.getFirstName()) && StringUtils.hasText(p.getLastName())) {
			resp.addAll(findByFullName(p.getFirstName().toLowerCase(), p.getLastName().toLowerCase()));
		} else if (StringUtils.hasText(p.getFirstName())) {
			resp.addAll(findByFirstName(p.getFirstName().toLowerCase()));
		} else if (StringUtils.hasText(p.getLastName())) {
			resp.addAll(findByLastName(p.getLastName().toLowerCase()));
		} else if((null != p.getContactNo1() && BigDecimal.ZERO.compareTo(p.getContactNo1()) != 0) ||
				(null != p.getContactNo2() && BigDecimal.ZERO.compareTo(p.getContactNo2()) != 0) 
				){
			if(null != p.getContactNo1()){
				resp.addAll(findByContactNo(p.getContactNo1()));
			}else{
				resp.addAll(findByContactNo(p.getContactNo2()));
			}
		}
		if(null!= resp && !resp.isEmpty()) {
			return resp;
		}else {
			throw new ValidationException(ErrorCode.NO_RECORD_FOUND);
		}
	}

	@Override
	public PatientView map(Patient p){
		PatientView pv = new PatientView();
		if(null != p){
			/*pv.setAddress1(p.getAddress1());
			pv.setAddress2(p.getAddress2());
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
				pv.setBloodGroup(BloodGroup.getBloodGroup(p.getBloodGroup()));
			}
			pv.setImage(p.getImage());
			pv.setSex(p.getSex());
			pv.setHeight(p.getHeight());
//			pv.setDobTimestamp(p.getDobTimestamp());
			pv.setDiscountType(p.getDiscountType());
			pv.setEmail(p.getEmail());*/
			BeanUtils.copyProperties(p, pv);
			
			Date date = new Date();
			Calendar calendar = new GregorianCalendar();
			calendar.setTime(date);
			int year = calendar.get(Calendar.YEAR);			
			pv.setAge((null != p.getDobYy() && p.getDobYy().compareTo(BigDecimal.ZERO) > 0 && year > 0)
					? year - p.getDobYy().intValue() : 0);

		}
		return pv;
	}
	
	@Override
	public List<PatientView> mapAll(List<Patient> pList){
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
			if(StringUtils.hasText(pv.getFirstName())){
				p.setFirstName(pv.getFirstName());
			}
			if(StringUtils.hasText(pv.getLastName())){
				p.setLastName(pv.getLastName());
			}
			p.setDobDd(pv.getDobDd());
			p.setDobMm(pv.getDobMm());
			p.setDobYy(pv.getDobYy());
			p.setContactNo1(pv.getContactNo1());
			p.setContactNo2(pv.getContactNo2());
			p.setDiscount(pv.getDiscount());
			p.setWeight(pv.getWeight());
			if(null != pv.getBloodGroup()){
				p.setBloodGroup(pv.getBloodGroup().getBloodGroup());
			}
			p.setAddress1(pv.getAddress1());
			p.setAddress2(pv.getAddress2());
			p.setTsCreated(new Timestamp(System.currentTimeMillis()));
			p.setImage(pv.getImage());
//			p.setPId(pv.getPId());
			p.setSex(pv.getSex());
			p.setHeight(pv.getHeight());
//			p.setDobTimestamp(pv.getDobTimestamp());
			p.setDiscountType(pv.getDiscountType());
			p.setEmail(pv.getEmail());
		}
		return p;
	}

	private String likedQuery(String s1){
		return new StringBuilder("%").append(s1).append("%").toString();
	}
}
