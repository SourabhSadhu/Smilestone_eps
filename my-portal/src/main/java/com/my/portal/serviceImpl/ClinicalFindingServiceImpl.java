package com.my.portal.serviceImpl;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.ClinicalFinding;
import com.my.portal.model.ClinicalFindingView;
import com.my.portal.repositories.ClinicalFindingRepository;
import com.my.portal.service.ClinicalFindingService;

@Service
public class ClinicalFindingServiceImpl implements ClinicalFindingService {

	private final Logger log = LoggerFactory.getLogger(getClass());
	@Autowired ClinicalFindingRepository repo;
	
	@PostConstruct
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	private void test(){
		
		ClinicalFinding cf = repo.findByNameToothAgeGrp("Carries", 17, "3to10");
		if(null != cf){
			log.error("ID: " + cf.getFId().longValue() + " Desc: " + cf.getFDesc());
		}
	}
	
	@Override
	public ClinicalFindingView findByNameToothAgeGrp(String name, long toothIndex, String AgeGrpIndex) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
