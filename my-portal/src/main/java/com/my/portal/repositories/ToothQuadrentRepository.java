package com.my.portal.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.ToothQuadrent;

public interface ToothQuadrentRepository extends JpaRepository<ToothQuadrent, Long> {

	List<ToothQuadrent> isToothGrpIdAvailable(@Param("tooth_grp_id") BigDecimal toothGrpId);

}
