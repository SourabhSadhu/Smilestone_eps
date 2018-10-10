package com.my.portal.repositories;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.my.portal.entities.MedicineMaster;
import com.my.portal.entities.MedicineMasterPK;

public interface MedicineMasterRepository extends JpaRepository<MedicineMaster, MedicineMasterPK>{
	
	List<MedicineMaster> getMedicineByName (@Param("name") String name);
	List<MedicineMaster> getMedicineByAgeGroupId (@Param("ageGrp") String ageGroup);
	List<MedicineMaster> getMedicineByTreatmentId (@Param("trtId") BigDecimal trtId);
	List<MedicineMaster> getMedicineByDisease (@Param("diseaseName") String diseaseCode);
	List<MedicineMaster> getMedicineByTreatmentNameAndAgeGrp (@Param("trtmntId") Long trtmntId, @Param("ageGrp") String ageGrp);

}
