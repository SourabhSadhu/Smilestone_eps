package com.my.portal.service;

import java.math.BigDecimal;

import com.my.portal.entities.AgeGroup;

public interface AgeGroupService {
	
	AgeGroup getFromAgeToAge(BigDecimal age);
	boolean checkByAge(BigDecimal fromAge, BigDecimal toAge);
	AgeGroup addAgeGrp(AgeGroup ageGroup);
}
