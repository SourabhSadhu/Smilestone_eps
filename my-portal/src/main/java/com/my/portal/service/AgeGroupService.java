package com.my.portal.service;

import java.math.BigDecimal;

import com.my.portal.entities.AgeGroup;
import com.my.portal.model.AgeGroupView;

public interface AgeGroupService {
	
	AgeGroup findById(String id);
	AgeGroupView getFromAgeToAge(BigDecimal age);
	boolean checkByAge(BigDecimal fromAge, BigDecimal toAge);
	boolean checkAgeGrpIndex(String index);
	AgeGroupView addAgeGrp(AgeGroupView ageGroup);
}
