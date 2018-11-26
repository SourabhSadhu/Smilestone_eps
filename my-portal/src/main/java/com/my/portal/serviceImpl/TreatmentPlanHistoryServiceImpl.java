package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.portal.entities.TreatmentPlanHistory;
import com.my.portal.model.TreatmentPlanHistoryView;
import com.my.portal.repositories.TreatmentPlanHistoryRepository;
import com.my.portal.service.TreatmentPlanHistoryService;

@Service
public class TreatmentPlanHistoryServiceImpl implements TreatmentPlanHistoryService {

	@Autowired TreatmentPlanHistoryRepository repo;
	
	@Override
	public List<TreatmentPlanHistoryView> findByPatientID(Long patientId) {
		return mapAll(repo.findByPatientId(patientId));
	}

	@Override
	public List<TreatmentPlanHistoryView> findByPrescriptionId(Long prescriptionId) {
		return mapAll(repo.findByPrescriptionId(prescriptionId));
	}

	@Override
	public List<TreatmentPlanHistoryView> findByPatientAndPrescriptionId(Long patientId, Long prescriptionId) {
		return mapAll(repo.findByPatientAndPrescriptionId(patientId, prescriptionId));
	}

	@Override
	public TreatmentPlanHistoryView findById(Long id) {
		return map(repo.findOne(id));
	}

	@Override
	public TreatmentPlanHistoryView addTreatmentPlan(TreatmentPlanHistoryView view) {
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
				e.setTsModified(new Timestamp(System.currentTimeMillis()));
			}
		}
		return e;
	}

}
