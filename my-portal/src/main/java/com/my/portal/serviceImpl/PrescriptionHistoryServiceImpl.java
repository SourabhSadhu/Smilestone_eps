package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.entities.PrescriptionHistory;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.repositories.PrescriptionHistoryRespository;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.TreatmentPlanService;

public class PrescriptionHistoryServiceImpl implements PrescriptionHistoryService {

	@Autowired PrescriptionHistoryRespository repo;
	@Autowired FeesBreakupService fbService;
	@Autowired MedicalHistoryService mhService;
	@Autowired TreatmentPlanService tpService;
	
	@Autowired PatientService pService;
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<PrescriptionHistoryView> findByPatientId(Long patientId) {
		return map(repo.findByPatientId(patientId));
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public PrescriptionHistoryView addPrescription(PrescriptionHistoryView v) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PrescriptionHistoryView map(PrescriptionHistory e) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PrescriptionHistoryView> map(List<PrescriptionHistory> e) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PrescriptionHistory map(PrescriptionHistoryView v) {
		// TODO Auto-generated method stub
		return null;
	}

}
