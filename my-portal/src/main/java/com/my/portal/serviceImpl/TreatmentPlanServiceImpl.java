package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.ClinicalFinding;
import com.my.portal.entities.TreatmentPlan;
import com.my.portal.model.ClinicalFindingView;
import com.my.portal.model.TreatmentPlanView;
import com.my.portal.repositories.ClinicalFindingRepository;
import com.my.portal.repositories.TreatmentPlanRepository;
import com.my.portal.service.ClinicalFindingService;
import com.my.portal.service.TreatmentPlanService;

@Service
public class TreatmentPlanServiceImpl implements TreatmentPlanService {

	@Autowired TreatmentPlanRepository repo;
	@Autowired ClinicalFindingRepository cfRepo;
	@Autowired ClinicalFindingService cfService;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public TreatmentPlanView findByClinicalFindingsID(Long cfId) {
		return map(repo.findByClinicalFindingsID(cfId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public TreatmentPlanView findByTreatmentName(String trtName) {
		return map(repo.findByTreatmentName(trtName));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public TreatmentPlanView findById(Long id) {
		return map(repo.findOne(id));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public TreatmentPlanView addTreatmentPlan(TreatmentPlanView view) {
		return map(repo.saveAndFlush(map(view)));
	}

	@Override
	public TreatmentPlanView map(TreatmentPlan e) {
		TreatmentPlanView v = new TreatmentPlanView();
		if(null != e){
			ClinicalFindingView cfView = cfService.map(e.getClinicalFindingBean());
			if(null == cfView){
				throw new ValidationException(ErrorCode.INVALID_CLINICAL_FINDING_ID);
			}
			v.setClinicalFindingBean(cfView);
			v.setTrtDesc(e.getTrtDesc());
			v.setTrtName(e.getTrtName());
			v.setTrtId(e.getTrtId());
			v.setClinicalFindingId(cfView.getFindingId());
		}
		return v;
	}

	@Override
	public List<TreatmentPlanView> map(List<TreatmentPlan> el) {
		List<TreatmentPlanView> vl = new ArrayList<>();
		for(TreatmentPlan e : el){
			vl.add(map(e));
		}
		return vl;
	}

	@Override
	public TreatmentPlan map(TreatmentPlanView v) {
		TreatmentPlan e = new TreatmentPlan();
		if(null != v){
			ClinicalFinding cf = cfRepo.findOne(v.getClinicalFindingId());
			if(null == cf){
				throw new ValidationException(ErrorCode.INVALID_CLINICAL_FINDING_ID);
			}
			e.setTrtDesc(v.getTrtDesc());
			e.setTrtName(v.getTrtName());			
			e.setClinicalFindingBean(cf);
			if(null != v.getTrtId() && 0 < v.getTrtId().longValue()){
				e.setTrtId(v.getTrtId());
			}
		}
		return e;
	}

}
