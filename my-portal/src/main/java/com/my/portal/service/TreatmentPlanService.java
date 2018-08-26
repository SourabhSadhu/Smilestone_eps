package com.my.portal.service;

import java.util.List;

import com.my.portal.entities.TreatmentPlan;
import com.my.portal.model.TreatmentPlanView;

public interface TreatmentPlanService {

	TreatmentPlanView findByClinicalFindingsID(Long cfId);
	TreatmentPlanView findByTreatmentName(String trtName);
	TreatmentPlanView findById(Long id);
	TreatmentPlanView addTreatmentPlan(TreatmentPlanView view);
	TreatmentPlanView map(TreatmentPlan e);
	List<TreatmentPlanView> map(List<TreatmentPlan> el);
	TreatmentPlan map(TreatmentPlanView v);
}
