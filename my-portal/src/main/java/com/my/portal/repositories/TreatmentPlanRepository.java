package com.my.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.TreatmentPlan;

public interface TreatmentPlanRepository extends JpaRepository<TreatmentPlan, Long>{

	TreatmentPlan findByClinicalFindingsID(@Param("cfId") Long cfId);
	TreatmentPlan findByTreatmentName(@Param("trtName") String trtName);
}
