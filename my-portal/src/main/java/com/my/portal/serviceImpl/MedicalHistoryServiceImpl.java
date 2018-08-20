package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.CommonUtils;
import com.my.portal.entities.MedicalHistory;
import com.my.portal.model.MedicalHistoryView;
import com.my.portal.repositories.MedicalHistoryRepository;
import com.my.portal.service.MedicalHistoryService;

@Service
public class MedicalHistoryServiceImpl implements MedicalHistoryService {

	@Autowired MedicalHistoryRepository repo;
	private List<MedicalHistoryView> mhvList = new ArrayList<>();
	
	@Override
	public List<MedicalHistoryView> getMedicalHistory() {		
		if(null != mhvList && !mhvList.isEmpty()){
			return mhvList;
		}
		return new ArrayList<>();
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicalHistoryView addMedicalHistory(MedicalHistoryView view) {
		return toView(repo.saveAndFlush(toEntity(view)));
	}
	
	@PostConstruct
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly=true)
	private void getAll(){
		mhvList.addAll(toView(repo.findAll()));
	}
	
	private MedicalHistoryView toView(MedicalHistory mh){
		MedicalHistoryView mhv = new MedicalHistoryView();
		if(null != mh){
			mhv.setDiseaseName(mh.getDiseaseName());
			mhv.setDiseaseFrom(CommonUtils.getDateDDMMYYYY(mh.getDiseaseFrom()));
			mhv.setNote(mh.getNote());
			mhv.setSeverity(mh.getSeverity());
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
		if(null != mhv){
			mh.setDiseaseFrom(new Timestamp(System.currentTimeMillis()));
			mh.setDiseaseName(mhv.getDiseaseName());
			mh.setNote(mhv.getNote());
			mh.setSeverity(mhv.getSeverity());
		}
		return mh;
	}

}
