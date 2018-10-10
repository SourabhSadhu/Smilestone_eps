package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.TreatmentPlan;
import com.my.portal.model.TreatmentPlanView;

public interface TreatmentPlanService {

	List<TreatmentPlanView> findByClinicalFindingsID(Long cfId);
	List<TreatmentPlanView> findByTreatmentName(String trtName);
	List<TreatmentPlanView> findAll();
	Object findById(Long id, boolean isRaw);
	TreatmentPlanView addTreatmentPlan(TreatmentPlanView view);
	TreatmentPlanView map(TreatmentPlan e);
	List<TreatmentPlanView> mapAll(List<TreatmentPlan> el);
	TreatmentPlan map(TreatmentPlanView v);
}
