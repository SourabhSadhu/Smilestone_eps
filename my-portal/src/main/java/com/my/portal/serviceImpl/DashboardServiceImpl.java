package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.entities.FeesBreakup;
import com.my.portal.entities.MedicalHistory;
import com.my.portal.entities.MedicineHistory;
import com.my.portal.entities.PrescriptionHistory;
import com.my.portal.entities.TreatmentPlanHistory;
import com.my.portal.model.DashboardResponse;
import com.my.portal.model.DashboardView;
import com.my.portal.model.FeesBreakupView;
import com.my.portal.model.PatientView;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.model.TreatmentPlanHistoryView;
import com.my.portal.model.TreatmentPlanStatus;
import com.my.portal.repositories.FeesBreakupRepository;
import com.my.portal.repositories.MedicalHistoryRepository;
import com.my.portal.repositories.MedicineHistoryRepository;
import com.my.portal.repositories.PrescriptionHistoryRespository;
import com.my.portal.repositories.TreatmentPlanHistoryRepository;
import com.my.portal.service.DashboardService;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.TreatmentPlanHistoryService;

@Service
public class DashboardServiceImpl implements DashboardService {

	@Autowired
	PatientService pService;
	@Autowired
	PrescriptionHistoryService phService;
	@Autowired
	MedicineService medService;
	@Autowired
	FeesBreakupService fbService;
	@Autowired
	MedicalHistoryService mhService;
	@Autowired
	TreatmentPlanHistoryService tphService;
	@Autowired
	PrescriptionHistoryRespository phRepo;
	@Autowired
	MedicalHistoryRepository mhRepo;
	@Autowired
	FeesBreakupRepository fbRepo;
	@Autowired
	MedicineHistoryRepository medRepo;
	@Autowired
	TreatmentPlanHistoryRepository tphRepo;

	
	@Override
	public Long getDashboardCount(Long patientId) {
		return phRepo.getCountByPatientId(patientId);		
	}

	@Override
	public List<DashboardView> getDashboard(Long patientId, Long prescriptionId, Long page, Long size) {

		List<DashboardView> dashboardViews = new ArrayList<>();
		if (null == patientId && null == prescriptionId) {
			throw new ValidationException(ErrorCode.INVALID_INPUT);
		}
		if (null == prescriptionId) {
			PatientView p1 = pService.findById(patientId);
			if (null == p1 || null == p1.getPId()) {
				throw new ValidationException(ErrorCode.INVALID_PATIENT_ID);
			}
			
			List<PrescriptionHistoryView> prescriptionHistoryViews = new ArrayList<>();
			if(null != page  && null != size && size.longValue() > 0){
				
				Sort sortCriteria = new Sort(Direction.DESC, "tsCreated");
				Pageable sortByTsCreated = new PageRequest(page.intValue(),size.intValue(),sortCriteria);
				/*Page<PrescriptionHistory> pageableData*/ List<PrescriptionHistory> listData = phRepo.findAllByPatientId(patientId, sortByTsCreated);				
//				List<PrescriptionHistory> listData = pageableData.getContent();
				prescriptionHistoryViews = phService.mapAll(listData);
				
			}else{
				prescriptionHistoryViews = phService.mapAll(phRepo.findByPatientId(patientId));
			}
			prescriptionHistoryViews.stream().forEach(pView -> {

				DashboardView view = new DashboardView();
				view.setpHistory(pView);
				view.getFbl().addAll(fbService.mapAll(fbRepo.findByPrescriptionId(pView.getPrescriptionId())));
				view.getMedhv().addAll(
						medService.mapAll(medRepo.getMedicineHistoryByPrescriptionId(pView.getPrescriptionId())));
				view.getMhv().addAll(mhService.mapAll(mhRepo.getByPrescriptionId(pView.getPrescriptionId())));
				view.getTphv().addAll(tphService.findByPrescriptionId(pView.getPrescriptionId()));

				dashboardViews.add(view);
			});
		} else {
			PrescriptionHistoryView pView = phService.findOne(prescriptionId);
			if (null != pView && null != pView.getPrescriptionId()) {
				DashboardView view = new DashboardView();
				view.setpHistory(pView);
				view.getFbl().addAll(fbService.mapAll(fbRepo.findByPrescriptionId(pView.getPrescriptionId())));
				view.getMedhv().addAll(
						medService.mapAll(medRepo.getMedicineHistoryByPrescriptionId(pView.getPrescriptionId())));
				view.getMhv().addAll(mhService.mapAll(mhRepo.getByPrescriptionId(pView.getPrescriptionId())));
				view.getTphv().addAll(tphService.findByPrescriptionId(pView.getPrescriptionId()));

				dashboardViews.add(view);
			}
		}
		if (dashboardViews.isEmpty()) {
			throw new ValidationException(ErrorCode.NO_RECORD_FOUND);
		} else {
			return dashboardViews;
		}
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, value = "transactionManager", rollbackFor = Exception.class)
	public DashboardResponse processPrescription(DashboardView v) {
		DashboardResponse response = new DashboardResponse();

		if (null != v) {
			PrescriptionHistoryView phv = v.getpHistory();
			if (null != phv) {
				if (null != phv.getPatientId()) {
					PatientView p1 = pService.findById(phv.getPatientId());
					if (null == p1 || null == p1
							.getPId()/* || 0 >= p1.getPId().longValue() */) {
						throw new ValidationException(ErrorCode.INVALID_PATIENT_ID);
					}
					PrescriptionHistory phEntity = phService.map(phv);
					phEntity.setVisitCount(1);
					phEntity = phRepo.saveAndFlush(phEntity);

					List<FeesBreakup> fbl = fbService.map(v.getFbl());
					for (FeesBreakup fb : fbl) {
						fb.setPatientId(phv.getPatientId());
						fb.setPrescriptionId(phEntity.getPrescriptionId());
						fb.setTsCreated(new Timestamp(System.currentTimeMillis()));
						fbRepo.save(fb);
					}
					fbRepo.flush();

					// TODO: Check if already exists and then insert
					List<MedicalHistory> mhl = mhService.map(v.getMhv());
					for (MedicalHistory mh : mhl) {
						mh.setPatientId(phv.getPatientId());
						mh.setPrescriptionId(phEntity.getPrescriptionId());
						mhRepo.save(mh);
					}
					mhRepo.flush();

					List<MedicineHistory> medhl = medService.mapEntities(v.getMedhv());
					for (MedicineHistory medh : medhl) {
						medh.setPatientId(phv.getPatientId());
						medh.setPrescriptionId(phEntity.getPrescriptionId());
						medh.setTsCreated(new Timestamp(System.currentTimeMillis()));
						medRepo.save(medh);
					}
					medRepo.flush();

					for (TreatmentPlanHistoryView tphv : v.getTphv()) {
						TreatmentPlanHistory tphEntity = tphService.map(tphv);
						tphEntity.setStatus(TreatmentPlanStatus.PENDING.getDesc());
						tphEntity.setPatientId(phv.getPatientId());
						tphEntity.setPrescriptionId(phEntity.getPrescriptionId());
						tphRepo.save(tphEntity);
					}
					tphRepo.flush();
					response.setPatientId(phEntity.getPatientId());
					response.setPrescriptionId(phEntity.getPrescriptionId());
					response.setStatus(true);
					return response;
				}
			}
		}
		response.setRespMsg("Server error");
		return response;
	}

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED, value = "transactionManager", rollbackFor = Exception.class)
	public DashboardResponse updatePrescription(DashboardView v) {
		DashboardResponse response = null;

		if (null != v) {
			PrescriptionHistoryView phv = v.getpHistory();
			if (null != phv && null != phv.getPatientId() && null != phv.getPrescriptionId()) {

				List<PrescriptionHistoryView> existingRecords = phService
						.findByPrescriptionAndPatientId(phv.getPatientId(), phv.getPrescriptionId());
				if (null == existingRecords || existingRecords.isEmpty()) {
					throw new ValidationException(ErrorCode.INVALID_PATIENT_ID_OR_PRESCRIPTION_ID);
				}

				PrescriptionHistoryView existing = existingRecords.get(0);
				// Update next appointment, fees, medicines
				if (phv.getNextAppointment() != null) {
					existing.setNextAppointment(phv.getNextAppointment());
				}

				List<MedicineHistory> medhl = medService.mapEntities(v.getMedhv());
				for (MedicineHistory medh : medhl) {
					medh.setPatientId(phv.getPatientId());
					medh.setPrescriptionId(phv.getPrescriptionId());
					medh.setTsCreated(new Timestamp(System.currentTimeMillis()));
					medRepo.save(medh);
				}
				medRepo.flush();

				List<FeesBreakupView> existingFees = fbService.findByPatientAndPrescriptionId(phv.getPatientId(),
						phv.getPrescriptionId());
				// Updating existing fees
				for (FeesBreakupView fb : v.getFbl()) {
					// Assuming existing fees entry will have fees id
					if (null != fb.getfId()) {
						existingFees.forEach(existingFee -> {
							if (fb.getfId().longValue() == existingFee.getfId().longValue()) {
								fbService.updateFeePaid(fb);
							}
						});
					} else {
						FeesBreakup feesBreakup = fbService.map(fb);
						feesBreakup.setPatientId(phv.getPatientId());
						feesBreakup.setPrescriptionId(phv.getPrescriptionId());
						feesBreakup.setTsCreated(new Timestamp(System.currentTimeMillis()));
						fbRepo.save(feesBreakup);
					}
				}
				;
				fbRepo.flush();
				response = new DashboardResponse();
				response.setPatientId(phv.getPatientId());
				response.setPrescriptionId(phv.getPrescriptionId());
				response.setStatus(true);
			}			
		}

		if (null == response) {
			throw new ValidationException(ErrorCode.NO_RECORD_FOUND);
		}
		return response;
	}

}
