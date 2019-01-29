package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.MedicalHistory;
import com.my.portal.model.MedicalHistoryView;
import com.my.portal.repositories.MedicalHistoryRepository;
import com.my.portal.service.MedicalHistoryMasterService;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;

@Service
public class MedicalHistoryServiceImpl implements MedicalHistoryService {

	@Autowired MedicalHistoryRepository repo;
	@Autowired MedicalHistoryMasterService mhmService;
	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService phService;
	
//	private List<String> mhmList = new ArrayList<>();
	
	
	@PostConstruct
	private void getAllHistoryMaster(){
//		mapAllMedicalHistory();
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> findAll() {
		return mapAll(repo.findAll());
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> getByPatientId(Long id) {
		return mapAll(repo.getByPatientId(id));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> getByPrescriptionId(Long id) {
		return mapAll(repo.getByPrescriptionId(id));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> getByMedicalHistoryName(String name) {
		return mapAll(repo.getByHistoryName(name));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicalHistoryView addMedicalHistory(MedicalHistoryView view) {
		MedicalHistory e = repo.saveAndFlush(map(view));
		return map(e);
	}

//	private List<String> mapAllMedicalHistory(){
//		if(null == mhmList || mhmList.isEmpty()) {
//			mhmList = new ArrayList<>();
//		}
//		if(mhmService.getMedicalHistoryMaster().size() != mhmList.size()) {		
//			mhmList = new ArrayList<>();
//			for(MedicalHistoryMasterView master : mhmService.getMedicalHistoryMaster()) {
//				mhmList.add(master.getMedicalHistoryName());
//			}
//		}
//		return mhmList;
//	}
	
	@Override
	public MedicalHistoryView map(MedicalHistory mh){
		MedicalHistoryView mhv = new MedicalHistoryView();
		if(null != mh){
			BeanUtils.copyProperties(mh, mhv);
		}
		return mhv;
	}
	
	@Override
	public List<MedicalHistoryView> mapAll(List<MedicalHistory> mhl){
		List<MedicalHistoryView> mhvList = new ArrayList<>();
		for(MedicalHistory mh : mhl){			
			mhvList.add(map(mh));
		}
		return mhvList;
	}
	
	@Override
	public MedicalHistory map(MedicalHistoryView v){
		
		MedicalHistory e = new MedicalHistory();
		if(null != v){
			e.setMedicalHistoryName(v.getMedicalHistoryName());
			e.setNote(v.getNote());
//			if(null != v.getPatient().getPId()){
//				e.setPatientId(v.getPatient().getPId());
//			}
			e.setSeverity(v.getSeverity());
			e.setStartedFrom(new Timestamp(System.currentTimeMillis()));
//			e.setPrescriptionHistory(phService.map(v.getPrescriptionHistory()));
		}
		return e;
	}

	@Override
	public List<MedicalHistory> map(List<MedicalHistoryView> vl) {
		List<MedicalHistory> el = new ArrayList<>();
		for(MedicalHistoryView v : vl){
			el.add(map(v));
		}
		return el;
	}

}
