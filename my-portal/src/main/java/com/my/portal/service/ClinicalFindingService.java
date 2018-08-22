package com.my.portal.service;

import java.util.List;

import com.my.portal.model.ClinicalFindingView;

public interface ClinicalFindingService {

	ClinicalFindingView findByNameToothAgeGrp(String name, long toothIndex, String ageGrpIndex);
	List<ClinicalFindingView> findAll();
	ClinicalFindingView addClinicalFinding(ClinicalFindingView view);
}
