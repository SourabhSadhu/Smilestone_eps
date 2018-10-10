package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.TreatmentPlan;
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
	public List<TreatmentPlanView> findByClinicalFindingsID(Long cfId) {
		return mapAll(repo.findByClinicalFindingsID(cfId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<TreatmentPlanView> findByTreatmentName(String trtName) {
		return mapAll(repo.findByTreatmentName(trtName));
	}

	
	@Override
	public List<TreatmentPlanView> findAll() {
		return mapAll(repo.findAll());
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public Object findById(Long id, boolean isRaw) {
		TreatmentPlan e = repo.findOne(id);
		return isRaw ? e : map(e);
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
			
			v.setClinicalFinding(e.getClinicalFinding());
			v.setTrtDesc(e.getTrtDesc());
			v.setTrtName(e.getTrtName());
			v.setTrtId(e.getTrtId());
		}
		return v;
	}

	@Override
	public List<TreatmentPlanView> mapAll(List<TreatmentPlan> el) {
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
			e.setTrtDesc(v.getTrtDesc());
			e.setTrtName(v.getTrtName());			
			e.setClinicalFinding(v.getClinicalFinding());
			e.setTrtId(v.getTrtId());
		}
		return e;
	}

}
