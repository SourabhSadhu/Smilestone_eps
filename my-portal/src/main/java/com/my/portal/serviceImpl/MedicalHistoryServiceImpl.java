package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ValidationException;
import com.my.portal.entities.MedicalHistory;
import com.my.portal.entities.MedicalHistoryMaster;
import com.my.portal.model.ErrorCode;
import com.my.portal.model.MedicalHistoryView;
import com.my.portal.repositories.MedicalHistoryRepository;
import com.my.portal.service.MedicalHistoryMasterService;
import com.my.portal.service.MedicalHistoryService;

@Service
public class MedicalHistoryServiceImpl implements MedicalHistoryService {

	@Autowired MedicalHistoryRepository repo;
	@Autowired MedicalHistoryMasterService masterService;
	
	private List<String> mhmList = new ArrayList<>();
	
	
	@PostConstruct
	private void getAllHistoryMaster(){
		mapAllMedicalHistory();
	}
	
	@Override
	public List<String> getAllMedicalHistoryMaster() {
		return mapAllMedicalHistory();
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> getAllMedicalHistory() {
		return toView(repo.findAll());
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> getByPatientId(Long id) {
		return toView(repo.getByPatientId(id));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicalHistoryView> getByMedicalHistoryName(String name) {
		return toView(repo.getByHistoryName(name));
	}
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicalHistoryView addMedicalHistory(MedicalHistoryView view) {
		return toView(repo.saveAndFlush(toEntity(view)));
	}

	private List<String> mapAllMedicalHistory(){
		if(null == mhmList || mhmList.isEmpty()) {
			mhmList = new ArrayList<>();
		}
		if(masterService.getMedicalHistoryMaster().size() != mhmList.size()) {		
			mhmList = new ArrayList<>();
			for(MedicalHistoryMaster master : masterService.getMedicalHistoryMaster()) {
				mhmList.add(master.getMedicalHistoryName());
			}
		}
		return mhmList;
	}
	
	private MedicalHistoryView toView(MedicalHistory mh){
		MedicalHistoryView mhv = new MedicalHistoryView();
		if(null != mh){
			mhv.setMedicalHistoryId(mh.getMedicalHistoryId());
			mhv.setMedicalHistoryMasterName(mh.getMedicalHistoryMaster().getMedicalHistoryName());
			mhv.setPatient(mh.getPatient());			
			mhv.setNote(mh.getNote());
			mhv.setSeverity(mh.getSeverity());
			mhv.setStartedFrom(mh.getStartedFrom());
		}
		return mhv;
	}
	
	private List<MedicalHistoryView> toView(List<MedicalHistory> mhl){
		List<MedicalHistoryView> mhvList = new ArrayList<>();
		for(MedicalHistory mh : mhl){			
			mhvList.add(toView(mh));
		}
		return mhvList;
	}
	
	private MedicalHistory toEntity(MedicalHistoryView mhv){
		
		MedicalHistory mh = new MedicalHistory();
		mapAllMedicalHistory();		
		if(null != mhv && mhmList.contains(mhv.getMedicalHistoryMasterName())){
			MedicalHistoryMaster masterData = new MedicalHistoryMaster();
			masterData.setMedicalHistoryName(mhv.getMedicalHistoryMasterName());
			mh.setMedicalHistoryMaster(masterData);
			mh.setStartedFrom(new Timestamp(System.currentTimeMillis()));
			mh.setNote(mhv.getNote());
			mh.setSeverity(mhv.getSeverity());
		}else {
			throw new ValidationException(ErrorCode.INVALID_MEDICAL_HISTORY);
		}
		return mh;
	}
	
}
