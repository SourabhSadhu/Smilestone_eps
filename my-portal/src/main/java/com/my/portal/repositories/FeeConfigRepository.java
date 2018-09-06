package com.my.portal.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.FeeConfig;

public interface FeeConfigRepository extends JpaRepository<FeeConfig, Long> {

	List<FeeConfig> findFeeConfig(@Param("age_grp") String ageGrp, @Param("tooth_grp_idx") Long toothGrpIdx, @Param("trtmntId") Long trtmntId);
	
}
