package com.my.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.ClinicalFinding;

public interface ClinicalFindingRepository extends JpaRepository<ClinicalFinding, String> {

	ClinicalFinding findByNameToothAgeGrp(@Param("f_name") String fName, @Param("tooth_index") long toothIndex, @Param("age_grp_id") String ageGrpId);
}
