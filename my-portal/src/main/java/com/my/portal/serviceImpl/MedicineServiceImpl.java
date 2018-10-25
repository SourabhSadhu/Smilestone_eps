package com.my.portal.serviceImpl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.my.portal.entities.MedicineHistory;
import com.my.portal.entities.MedicineMaster;
import com.my.portal.model.MedicineHistoryView;
import com.my.portal.model.MedicineMasterView;
import com.my.portal.repositories.MedicineHistoryRepository;
import com.my.portal.repositories.MedicineMasterRepository;
import com.my.portal.service.AgeGroupService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.TreatmentPlanService;

@Service
public class MedicineServiceImpl implements MedicineService {

	@Autowired MedicineMasterRepository masterRepo;
	@Autowired MedicineHistoryRepository histRepo;
	
	@Autowired AgeGroupService agService;
	@Autowired TreatmentPlanService tpService;
	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService phService;
	
	/**
	 * Operations for Medicine Master
	 */
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicineMasterView> getMedicineByName(String name) {
		return map(masterRepo.getMedicineByName(name));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicineMasterView> getMedicineByAgeGroupId(String ageGroup) {
		return map(masterRepo.getMedicineByAgeGroupId(ageGroup));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicineMasterView> getMedicineByTreatmentId(BigDecimal trtId) {
		return map(masterRepo.getMedicineByTreatmentId(trtId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicineMasterView> getMedicineByDisease(String diseaseCode) {
		return map(masterRepo.getMedicineByDisease(diseaseCode));
	}
	
	@Override
	public List<MedicineMasterView> getMedicineByTreatmentNameAndAgeGrp(Long trtmntId, String ageGrp) {
		return map(masterRepo.getMedicineByTreatmentNameAndAgeGrp(trtmntId, ageGrp));
	} 
	
	@Override
	public List<MedicineMasterView> getMedicineByTreatmentNameAndAge (Long trtmntId, String age) {
		
		try{
			String ageGrp = agService.getFromAgeToAge(BigDecimal.valueOf(Long.parseLong(age))).getGroupId();
			return getMedicineByTreatmentNameAndAgeGrp(trtmntId, ageGrp);
		}catch (NumberFormatException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicineMasterView addMedicine(MedicineMasterView v) {
		return map(masterRepo.saveAndFlush(map(v)));
	}

	@Override
	public MedicineMasterView map(MedicineMaster e) {
		MedicineMasterView v = new MedicineMasterView();
		if(null != e){
			v.setClinicalAvailability(e.getClinicalAvailability());
			v.setDiseaseCode(e.getDiseaseCode());
			v.setDiseaseName(e.getDiseaseName());
			if(null != e.getId()){
				v.setTreatmentId(e.getId().getTreatmentId());
				v.setDosage(e.getId().getDosage());
				v.setMedicineName(e.getId().getMedicineName());
				v.setAgeGroup(e.getId().getAgeGroup());
				v.setTreatmentId(e.getId().getTreatmentId());
			}
			v.setMedicineId(e.getMedicineId());
		}
		return v;
	}

	@Override
	public List<MedicineMasterView> map(List<MedicineMaster> el) {
		List<MedicineMasterView> vl = new ArrayList<>();
		for(MedicineMaster e : el){
			vl.add(map(e));
		}
		return vl;
	}

	@Override
	public MedicineMaster map(MedicineMasterView v) {
		MedicineMaster e = new MedicineMaster();
		/*MedicineMasterPK id = new MedicineMasterPK();
		if(null != v && null != v.getId()){
			if(StringUtils.hasText(v.getAgeGroupBean().getGroupId())){
				AgeGroup ag = agService.findById(v.getAgeGroupBean().getGroupId());
				e.setAgeGroupBean(ag);	
				id.setAgeGroup(ag.getGroupId());
			}
			e.setClinicalAvailability(new BigDecimal(0));
			e.setDiseaseCode(v.getDiseaseCode());
			e.setDiseaseName(v.getDiseaseName());
			if(null != v.getTreatmentPlan().getTrtId() && 0 < v.getTreatmentPlan().getTrtId().longValue()){
				TreatmentPlan tp = (TreatmentPlan) tpService.findById(v.getTreatmentPlan().getTrtId(), true); 
				e.setTreatmentPlan(tp);
				id.setTreatmentId(tp.getTrtId());
			}
			id.setDosage(v.getId().getDosage());
			id.setMedicineName(v.getId().getMedicineName());
			e.setId(id);
		}*/
		return e;
	}

	/**
	 * Operations for Medicine History
	 */
	
	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED)
	public MedicineHistoryView addMedicineHistory(MedicineHistoryView e) {
		return map(histRepo.saveAndFlush(map(e)));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicineHistoryView> getMedicineHistoryByPatientId(BigDecimal patientId) {
		return mapAll(histRepo.getMedicineHistoryByPatientId(patientId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public List<MedicineHistoryView> getMedicineHistoryByPrescriptionId(BigDecimal prescriptionId) {
		return mapAll(histRepo.getMedicineHistoryByPrescriptionId(prescriptionId));
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
	public MedicineHistoryView getMedicineHistoryById(Long id) {
		return map(histRepo.findOne(id));
	}

	@Override
	public MedicineHistoryView map(MedicineHistory e) {
		MedicineHistoryView v = new MedicineHistoryView();
		if(null != e){
			v.setDiseaseCode(e.getDiseaseCode());
			v.setDiseaseName(e.getDiseaseName());
			v.setDosage(e.getDosage());
			v.setMedicineName(e.getMedicineName());
			v.setMedId(e.getMedId());
			v.setPatientId(e.getPatientId());
			v.setPrescriptionId(e.getPrescriptionId());
		}
		return null;
	}

	@Override
	public MedicineHistory map(MedicineHistoryView v) {
		MedicineHistory e = new MedicineHistory();
		if(null != v){
			e.setDiseaseCode(v.getDiseaseCode());
			e.setDiseaseName(v.getDiseaseName());
			e.setDosage(v.getDosage());
			e.setMedicineName(v.getMedicineName());
			e.setPatientId(v.getPatientId());
			e.setPrescriptionId(v.getPrescriptionId());
		}
		return e;
	}

	@Override
	public List<MedicineHistoryView> mapAll(List<MedicineHistory> el) {
		List<MedicineHistoryView> vl = new ArrayList<>();
		for(MedicineHistory e : el){
			vl.add(map(e));
		}
		return vl;
	}

	@Override
	public List<MedicineHistory> mapEntities(List<MedicineHistoryView> vl) {
		List<MedicineHistory> el = new ArrayList<>();
		for(MedicineHistoryView v : vl){
			el.add(map(v));
		}
		return el;
	}

}
