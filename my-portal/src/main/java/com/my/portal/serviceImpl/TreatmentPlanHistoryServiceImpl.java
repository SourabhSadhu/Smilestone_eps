package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.PrescriptionHistory;
import com.my.portal.entities.TreatmentPlanHistory;
import com.my.portal.model.TreatmentPlanHistoryView;
import com.my.portal.repositories.PrescriptionHistoryRespository;
import com.my.portal.repositories.TreatmentPlanHistoryRepository;
import com.my.portal.service.TreatmentPlanHistoryService;

@Service
public class TreatmentPlanHistoryServiceImpl implements TreatmentPlanHistoryService {

	@Autowired TreatmentPlanHistoryRepository repo;
	@Autowired PrescriptionHistoryRespository prescriptionHistoryRepo;
	private final long TIME_GAP_TO_UPDATE_VISIT_COUNT_MILLIS = 86400000l;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<TreatmentPlanHistoryView> findByPatientID(Long patientId) {
		return mapAll(repo.findByPatientId(patientId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<TreatmentPlanHistoryView> findByPrescriptionId(Long prescriptionId) {
		return mapAll(repo.findByPrescriptionId(prescriptionId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<TreatmentPlanHistoryView> findByPatientAndPrescriptionId(Long patientId, Long prescriptionId) {
		return mapAll(repo.findByPatientAndPrescriptionId(patientId, prescriptionId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public TreatmentPlanHistoryView findById(Long id) {
		return map(repo.findOne(id));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public TreatmentPlanHistoryView addTreatmentPlan(TreatmentPlanHistoryView view) {
		if(null == view.getPatientId() || view.getPatientId().longValue() <= 0 || null == view.getPrescriptionId() || view.getPrescriptionId().longValue() <= 0){
			throw new ValidationException(ErrorCode.INVALID_PATIENT_ID_OR_PRESCRIPTION_ID);
		}
		PrescriptionHistory prescription = prescriptionHistoryRepo.findByPrescriptionAndPatientId(view.getPatientId(), view.getPrescriptionId());
		if(null == prescription){
			throw new ValidationException(ErrorCode.INVALID_PATIENT_ID_OR_PRESCRIPTION_ID);
		}
		// Updating visit count
		List<TreatmentPlanHistoryView> treatmentPlanList = this.findByPatientAndPrescriptionId(view.getPatientId(), view.getPrescriptionId());
		if(null != treatmentPlanList && !treatmentPlanList.isEmpty()){
			TreatmentPlanHistoryView lastUpdatedRecord = treatmentPlanList.get(0);
			if(null != lastUpdatedRecord && null != lastUpdatedRecord.getTsCreated() && System.currentTimeMillis() - lastUpdatedRecord.getTsCreated().longValue() > TIME_GAP_TO_UPDATE_VISIT_COUNT_MILLIS){				
				prescriptionHistoryRepo.updateVisitCount(prescription.getVisitCount() + 1, prescription.getPrescriptionId());
			}
		}
		return map(repo.saveAndFlush(map(view)));
	}

	@Override
	public TreatmentPlanHistoryView map(TreatmentPlanHistory e) {
		TreatmentPlanHistoryView v = new TreatmentPlanHistoryView();
		if(null != e){
			BeanUtils.copyProperties(e, v, "tsCreated","tsModified");
			if(null != e.getTsCreated()){
				v.setTsCreated(e.getTsCreated().getTime());
			}
			if(null != e.getTsModified()){
				v.setTsModified(e.getTsModified().getTime());
			}
		}
		return v;
	}

	@Override
	public List<TreatmentPlanHistoryView> mapAll(List<TreatmentPlanHistory> el) {
		List<TreatmentPlanHistoryView> tphvl = new ArrayList<>();
		if(null != el && !el.isEmpty()){
			el.forEach( e -> tphvl.add(map(e)));
		}
		return tphvl;
	}

	@Override
	public TreatmentPlanHistory map(TreatmentPlanHistoryView v) {
		TreatmentPlanHistory e = new TreatmentPlanHistory();
		if(null != v){
			BeanUtils.copyProperties(v, e, "tsCreated","tsModified");
			if(v.getTsCreated() == null || v.getTsCreated().longValue() == 0){
				e.setTsCreated(new Timestamp(System.currentTimeMillis()));
			}else{
				e.setTsCreated(new Timestamp(v.getTsCreated()));
				e.setTsModified(new Timestamp(System.currentTimeMillis()));
			}
		}
		return e;
	}

}
