package com.my.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.FeeConfig;

public interface FeeConfigRepository extends JpaRepository<FeeConfig, Long> {

	FeeConfig findFeeConfig(@Param("age_grp") String ageGrp, @Param("tooth_grp_idx") Long toothGrpIdx, @Param("trtmntId") Long trtmntId);
	
}
