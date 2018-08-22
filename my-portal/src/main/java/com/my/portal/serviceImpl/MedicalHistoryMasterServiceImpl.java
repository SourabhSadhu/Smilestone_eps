package com.my.portal.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.MedicalHistoryMaster;
import com.my.portal.repositories.MedicalHistoryMasterRepository;
import com.my.portal.service.MedicalHistoryMasterService;

@Service
public class MedicalHistoryMasterServiceImpl implements MedicalHistoryMasterService {

	@Autowired MedicalHistoryMasterRepository repo;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryMaster> getMedicalHistoryMaster() {
		return repo.findAll();
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public boolean isMedicalHistoryAvailable(String name) {
		return repo.exists(name);
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicalHistoryMaster addMedicalHistoryMaster(MedicalHistoryMaster master) {
		return repo.saveAndFlush(master);
	}

}
