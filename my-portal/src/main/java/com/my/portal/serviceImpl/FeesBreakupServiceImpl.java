package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.FeesBreakup;
import com.my.portal.model.FeesBreakupView;
import com.my.portal.repositories.ClinicalFindingRepository;
import com.my.portal.repositories.FeesBreakupRepository;
import com.my.portal.repositories.PatientRespository;
import com.my.portal.repositories.PrescriptionHistoryRespository;
import com.my.portal.service.FeesBreakupService;

@Service
public class FeesBreakupServiceImpl implements FeesBreakupService {

	@Autowired ClinicalFindingRepository cfRepo;
	@Autowired PatientRespository pRepo;
	@Autowired PrescriptionHistoryRespository phRepo;
	@Autowired FeesBreakupRepository repo;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<FeesBreakupView> findByPatientId(Long patientId) {
		return mapAll(repo.findByPatientId(patientId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<FeesBreakupView> findByPrescriptionId(Long prescriptionId) {
		return mapAll(repo.findByPrescriptionId(prescriptionId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<FeesBreakupView> findByClinicalFindingId(Long clinicalFindingId) {
		return mapAll(repo.findByClinicalFindingId(clinicalFindingId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<FeesBreakupView> findByPatientAndPrescriptionId(Long patientId, Long prescriptionId) {
		return mapAll(repo.findByPatientAndPrescriptionId(patientId, prescriptionId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<FeesBreakupView> findByFeesBreakupView(Long patientId, Long prescriptionId, Long clinicalFindingId) {
		return mapAll(repo.findByFeesBreakup(patientId, prescriptionId, clinicalFindingId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public FeesBreakupView findById(Long feesBrealupId) {
		return map(repo.findOne(feesBrealupId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public FeesBreakupView addFeesBreakup(FeesBreakupView view) {
		return map(repo.saveAndFlush(map(view)));
	}
	
	FeesBreakupView map(FeesBreakup e){
		FeesBreakupView v = new FeesBreakupView();
		if(null != e){
			if(e.getAmount().compareTo(BigDecimal.ZERO) > 0){
				v.setAmount(e.getAmount());
			}
			if(null != e.getClinicalFinding()){
				v.setClinicalFindingRef(e.getClinicalFinding().getFId());
			}
			v.setfId(e.getFId());
			v.setNotes(e.getNotes());
			if(null != e.getPatient()){
				v.setPatientRef(e.getPatient().getPId());
			}
			if(null != e.getPrescriptionHistory()){
				v.setPrescriptionHistoryRef(e.getPrescriptionHistory().getPrescriptionId());
			}
			v.setTsCreated(e.getTsCreated().getTime());
		}
		return v;
	}
	
	List<FeesBreakupView> mapAll(List<FeesBreakup> el){
		List<FeesBreakupView> vl = new ArrayList<>();
		for(FeesBreakup e : el){
			vl.add(map(e));
		}
		return vl;
	}
	
	FeesBreakup map(FeesBreakupView v){
		FeesBreakup e = new FeesBreakup();
		if(null != v){
			if(null == cfRepo.findOne(v.getClinicalFindingRef())) throw new ValidationException(ErrorCode.INVALID_CLINICAL_FINDING_ID);
			if(null == pRepo.findOne(v.getPatientRef())) throw new ValidationException(ErrorCode.INVALID_PATIENT_ID);
			if(null == phRepo.findOne(v.getPrescriptionHistoryRef())) throw new ValidationException(ErrorCode.INVALID_PRESCRIPTION_HISTORY_ID);
			e.setAmount(v.getAmount());
			e.setClinicalFinding(cfRepo.findOne(v.getClinicalFindingRef()));
			e.setFId(v.getfId());
			e.setNotes(v.getNotes());
			e.setPatient(pRepo.findOne(v.getPatientRef()));
			e.setPrescriptionHistory(phRepo.findOne(v.getPrescriptionHistoryRef()));
		}
		return e;
	}
	
	/*List<FeesBreakup> mapAll(List<FeesBreakupView> vl){
		List<FeesBreakup> el = new ArrayList<>();
		for(FeesBreakupView v : vl){
			el.add(map(v));
		}
		return el;
	}*/

}
