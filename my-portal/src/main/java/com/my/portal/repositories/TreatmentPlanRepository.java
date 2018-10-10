package com.my.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.TreatmentPlan;

public interface TreatmentPlanRepository extends JpaRepository<TreatmentPlan, Long>{

	List<TreatmentPlan> findByClinicalFindingsID(@Param("cfId") Long cfId);
	List<TreatmentPlan> findByTreatmentName(@Param("trtName") String trtName);
}
