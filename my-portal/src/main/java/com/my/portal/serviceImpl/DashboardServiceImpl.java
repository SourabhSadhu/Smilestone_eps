package com.my.portal.serviceImpl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.FeesBreakup;
import com.my.portal.entities.MedicalHistory;
import com.my.portal.entities.PrescriptionHistory;
import com.my.portal.model.DashboardRequest;
import com.my.portal.model.DashboardView;
import com.my.portal.model.PatientView;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.repositories.FeesBreakupRepository;
import com.my.portal.repositories.MedicalHistoryRepository;
import com.my.portal.repositories.PrescriptionHistoryRespository;
import com.my.portal.service.DashboardService;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;


@Service
public class DashboardServiceImpl implements DashboardService {

	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService phService;
	@Autowired MedicineService medService;
	@Autowired FeesBreakupService fbService;
	@Autowired MedicalHistoryService mhService;
	
	@Autowired PrescriptionHistoryRespository phRepo;
	@Autowired MedicalHistoryRepository mhRepo;
	@Autowired FeesBreakupRepository fbRepo;
	
	private final Logger log = LoggerFactory.getLogger(getClass()); 
	
	@Override
//	@Transactional(isolation = Isolation.READ_COMMITTED, rollbackFor = Exception.class)
	public boolean processPrescription(DashboardView v) {
		if(null != v){
			try{
				PrescriptionHistoryView phv = v.getpHistory();
				if(null != phv){
					if( null != phv.getPatientId()){
						PatientView p1 = pService.findById(phv.getPatientId());
						if(null == p1 || null == p1.getPId() || 0 >= p1.getPId().longValue()){
							throw new ValidationException(ErrorCode.INVALID_PATIENT_ID);
						}
						PrescriptionHistory phEntity = phService.map(phv);
						phEntity = phRepo.saveAndFlush(phEntity);
						
						List<FeesBreakup> fbl = fbService.map(v.getFbl());
						for(FeesBreakup fb : fbl){
							fb.setPatientId(phv.getPatientId());
							fb.setPrescriptionId(phEntity.getPrescriptionId());
							fbRepo.save(fb);
						}
						fbRepo.flush();
						
						List<MedicalHistory> mhl = mhService.map(v.getMhv());
						for(MedicalHistory mh : mhl){
							mh.setPatientId(phv.getPatientId());
							mh.setPrescriptionId(phEntity.getPrescriptionId());
							mhRepo.save(mh);							
						}
						mhRepo.flush();
						
						/*
						List<MedicineHistoryView> medvl = v.getMedhv();
						for(MedicineHistoryView medv : medvl){
							medService.addMedicineHistory(medv);
						}*/
						return true;
					}
				}
			}catch(Exception e){
				e.printStackTrace();
				log.error(e.getMessage());
			}
		}
		return false;
	}

	@Override
	public DashboardView getDashboard(DashboardRequest r) {
		// TODO Auto-generated method stub
		return null;
	}

}
