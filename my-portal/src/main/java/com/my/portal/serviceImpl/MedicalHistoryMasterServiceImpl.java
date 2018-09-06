package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.MedicalHistoryMaster;
import com.my.portal.model.MedicalHistoryMasterView;
import com.my.portal.repositories.MedicalHistoryMasterRepository;
import com.my.portal.service.MedicalHistoryMasterService;
import com.my.portal.service.MedicalHistoryService;

@Service
public class MedicalHistoryMasterServiceImpl implements MedicalHistoryMasterService {

	@Autowired MedicalHistoryMasterRepository repo;
	@Autowired MedicalHistoryService mhService;
		
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryMasterView> getMedicalHistoryMaster() {
		return mapAll(repo.findAll());
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public boolean isMedicalHistoryAvailable(String name) {
		return repo.exists(name);
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicalHistoryMasterView addMedicalHistoryMaster(MedicalHistoryMasterView master) {
		return map(repo.saveAndFlush(map(master)));
	}

	@Override
	public MedicalHistoryMaster map(MedicalHistoryMasterView v) {
		MedicalHistoryMaster e = new MedicalHistoryMaster();
		if(null != v){
			e.setMedicalHistoryName(v.getMedicalHistoryName());
		}
		return e;
	}

	@Override
	public MedicalHistoryMasterView map(MedicalHistoryMaster e) {
		MedicalHistoryMasterView v = new MedicalHistoryMasterView();
		if(null != e){
			v.setMedicalHistoryName(e.getMedicalHistoryName());
//			v.setMedicalHistories(mhService.mapAll(e.getMedicalHistories()));
		}
		return v;
	}

	@Override
	public List<MedicalHistoryMasterView> mapAll(List<MedicalHistoryMaster> el) {
		List<MedicalHistoryMasterView> vl = new ArrayList<>();
		for(MedicalHistoryMaster e : el){
			vl.add(map(e));
		}
		return vl;
	}

}
