package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.sql.Timestamp;
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
import com.my.portal.repositories.FeesBreakupRepository;
import com.my.portal.service.ClinicalFindingService;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;

@Service
public class FeesBreakupServiceImpl implements FeesBreakupService {

	@Autowired FeesBreakupRepository repo;
	@Autowired ClinicalFindingService cfService;
	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService phService;
	
	
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
	
	@Override
	public FeesBreakupView map(FeesBreakup e){
		FeesBreakupView v = new FeesBreakupView();
		if(null != e){
			v.setAmount(e.getAmount());
			v.setAmountPaid(e.getAmountPaid());
			v.setfId(e.getFId());
			v.setNotes(e.getNotes());
			v.setTsCreated(e.getTsCreated());
//			v.setClinicalFinding(cfService.map(e.getClinicalFinding()));
//			v.setPatient(pService.map(e.getPatient()));
//			v.setPrescriptionHistory(phService.map(e.getPrescriptionHistory()));
			v.setTrtmntPlanRef(e.getTrtmntPlanRef());
			v.setPatientId(e.getPatientId());
			v.setPrescriptionId(v.getPrescriptionId());
		}
		return v;
	}
	
	@Override
	public List<FeesBreakupView> mapAll(List<FeesBreakup> el){
		List<FeesBreakupView> vl = new ArrayList<>();
		if(null != el && !el.isEmpty()){
			for(FeesBreakup e : el){
				vl.add(map(e));
			}
		}
		return vl;
	}
	
	@Override
	public FeesBreakup map(FeesBreakupView v){
		FeesBreakup e = new FeesBreakup();
		if(null != v){
			if(BigDecimal.ZERO.compareTo(v.getAmount()) >= 0){
				throw new ValidationException(ErrorCode.ZERO_FEE_BREAKUP_AMOUNT);
			}
			e.setAmount(v.getAmount());
			e.setAmountPaid(v.getAmountPaid());
			e.setNotes(v.getNotes());
			e.setTsCreated(new Timestamp(System.currentTimeMillis()));
//			e.setClinicalFinding(cfService.map(v.getClinicalFinding()));
//			e.setPatient(pService.map(v.getPatient()));
//			e.setPrescriptionHistory(phService.map(v.getPrescriptionHistory()));
			e.setTrtmntPlanRef(v.getTrtmntPlanRef());
			e.setPatientId(v.getPatientId());
			e.setPrescriptionId(v.getPrescriptionId());
		}
		return e;
	}

	@Override
	public List<FeesBreakup> map(List<FeesBreakupView> vl) {
		List<FeesBreakup> el = new ArrayList<FeesBreakup>();
		for(FeesBreakupView v : vl){
			el.add(map(v));
		}
		return el;
	}
	
}
