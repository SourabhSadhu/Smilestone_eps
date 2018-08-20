package com.my.portal.service;

import java.math.BigDecimal;

import com.my.portal.model.AgeGroupView;

public interface AgeGroupService {
	
	AgeGroupView getFromAgeToAge(BigDecimal age);
	boolean checkByAge(BigDecimal fromAge, BigDecimal toAge);
	AgeGroupView addAgeGrp(AgeGroupView ageGroup);
}
