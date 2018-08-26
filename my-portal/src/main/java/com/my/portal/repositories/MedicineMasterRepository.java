package com.my.portal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.my.portal.entities.MedicineMaster;
import com.my.portal.entities.MedicineMasterPK;

public interface MedicineMasterRepository extends JpaRepository<MedicineMaster, MedicineMasterPK>{

}
