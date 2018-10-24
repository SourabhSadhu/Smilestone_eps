package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.PrescriptionHistory;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.repositories.PrescriptionHistoryRespository;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.TreatmentPlanService;

@Service
public class PrescriptionHistoryServiceImpl implements PrescriptionHistoryService {

	@Autowired PrescriptionHistoryRespository repo;
	@Autowired FeesBreakupService fbService;
	@Autowired MedicalHistoryService mhService;
	@Autowired MedicineService medService;
	@Autowired TreatmentPlanService tpService;
	
	@Autowired PatientService pService;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PrescriptionHistoryView> findByPatientId(Long patientId) {
		return mapAll(repo.findByPatientId(patientId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PrescriptionHistoryView> getByDateRange(Timestamp startDate, Timestamp endDate) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public PrescriptionHistoryView findOne(Long id) {
		return map(repo.findOne(id));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public PrescriptionHistoryView addPrescription(PrescriptionHistoryView v) {
		return map(repo.saveAndFlush(map(v)));
	}

	@Override
	public PrescriptionHistoryView map(PrescriptionHistory e) {
		// TODO Auto-generated method stub
		PrescriptionHistoryView v= new PrescriptionHistoryView();
		v.setPrescriptionId(e.getPrescriptionId());
		return v;
	}

	@Override
	public PrescriptionHistory map(PrescriptionHistoryView v) {
		PrescriptionHistory e = new PrescriptionHistory();
		e.setAdvice(v.getAdvice());
		e.setChiefComplaint(v.getChiefComplaint());
		e.setClinicalFindings(v.getClinicalFindings());		
		e.setInvestigation(v.getInvestigation());
		e.setTsCreated(new Timestamp(System.currentTimeMillis()));
		e.setPatientId(v.getPatientId());
//		e.setFeesBreakups(fbService.map(v.getFeesBreakups()));
//		List<FeesBreakup> fbl = fbService.map(v.getFeesBreakups());
//		for(FeesBreakup fb : fbl){
//			e.addFeesBreakup(fb);
//		}
//		
//		e.setMedicineHistories(medService.mapEntities(v.getMedicineHistories()));
//		List<MedicineHistory> medhl = medService.mapEntities(v.getMedicineHistories());
//		for(MedicineHistory medh : medhl){
//			e.addMedicineHistory(medh);
//		}
//		
//		List<MedicalHistory> mhl = mhService.map(v.getMedicalHistories());
//		for(MedicalHistory medh : mhl){
//			e.addMedicalHistory(medh);
//		}
		return e;
	}

	@Override
	public List<PrescriptionHistoryView> mapAll(List<PrescriptionHistory> el) {
		List<PrescriptionHistoryView> vl = new ArrayList<>();
		for(PrescriptionHistory e : el){
			vl.add(map(e));
		}
		return vl;
	}

}