package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.ClinicalFinding;
import com.my.portal.model.ClinicalFindingView;
import com.my.portal.repositories.ClinicalFindingRepository;
import com.my.portal.service.AgeGroupService;
import com.my.portal.service.ClinicalFindingService;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.ToothQuadrentService;
import com.my.portal.service.TreatmentPlanService;

@Service
public class ClinicalFindingServiceImpl implements ClinicalFindingService {

	private final Logger log = LoggerFactory.getLogger(getClass());
	@Autowired ClinicalFindingRepository repo;

	@Autowired AgeGroupService ageGrpService;
	@Autowired ToothQuadrentService toothService;
	@Autowired FeesBreakupService fbkService;
	@Autowired TreatmentPlanService tpService;
	private List<ClinicalFindingView> cfvList = new ArrayList<>();
	
	@PostConstruct
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	private void test(){
//		mapAllFinding();
	}
	
	/*@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public ClinicalFindingView findByNameToothAgeGrp(String name, long toothIndex, String ageGrpIndex) {
		return map(repo.findByNameToothAgeGrp(name, toothIndex, ageGrpIndex));
	}*/

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public ClinicalFindingView addClinicalFinding(ClinicalFindingView view) {
		return map(repo.saveAndFlush(map(view)));
	}
	
	
	@Override
	public List<ClinicalFindingView> findAll() {
		return mapAllFinding();
	}

	
	@Override
	public ClinicalFindingView map(ClinicalFinding e) {
		ClinicalFindingView v = new ClinicalFindingView();
		if(null != e) {
			v.setFDesc(e.getFDesc());
			v.setFId(e.getFId());
			v.setFName(e.getFName());
//			v.setFeesBreakups(fbkService.mapAll(e.getFeesBreakups()));
//			v.setTreatmentPlans(tpService.mapAll(e.getTreatmentPlans()));
		}
		return v;
	}
	
	@Override
	public ClinicalFinding map(ClinicalFindingView v) {
		ClinicalFinding e = new ClinicalFinding();
		if(null != v) {
			if(StringUtils.isEmpty(v.getFDesc())){
				throw new ValidationException(ErrorCode.INVALID_INPUT);
			}
			e.setFDesc(v.getFDesc());
			e.setFName(v.getFName());
		}
		return e;
	}
	
	@Override
	public List<ClinicalFindingView> mapAllFinding() {
		if(null == cfvList) {
			cfvList = new ArrayList<>();
		}
		if(repo.findAll().size() != cfvList.size()) {
			for(ClinicalFinding f : repo.findAll()) {
				cfvList.add(map(f));
			}
		}
		return cfvList;
	}

}
