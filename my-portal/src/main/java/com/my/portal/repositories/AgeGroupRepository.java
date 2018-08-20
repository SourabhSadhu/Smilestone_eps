package com.my.portal.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.AgeGroup;

public interface AgeGroupRepository extends JpaRepository<AgeGroup, String> {

	List<AgeGroup> findByFromAgeToAge(@Param("age")BigDecimal age);
	List<AgeGroup> checkByAge(@Param("fromAge")BigDecimal fromAge, @Param("toAge")BigDecimal toAge);
}
