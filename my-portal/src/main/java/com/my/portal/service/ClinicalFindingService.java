package com.my.portal.service;

import com.my.portal.model.ClinicalFindingView;

public interface ClinicalFindingService {

	ClinicalFindingView findByNameToothAgeGrp(String name, long toothIndex, String AgeGrpIndex);
}
