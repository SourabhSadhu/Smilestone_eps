package com.my.portal.serviceImpl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Override
	@Transactional(isolation = Isolation.READ_COMMITTED,value = "transactionManager", rollbackFor = Exception.class)
	public DashboardResponse processPrescription(DashboardView v) {
		DashboardResponse response = new DashboardResponse();

		if (null != v) {
//			try {
				PrescriptionHistoryView phv = v.getpHistory();
				if (null != phv) {
					if (null != phv.getPatientId()) {
						PatientView p1 = pService.findById(phv.getPatientId());
						if (null == p1 || null == p1.getPId()/* || 0 >= p1.getPId().longValue() */) {
							throw new ValidationException(ErrorCode.INVALID_PATIENT_ID);
						}
						PrescriptionHistory phEntity = phService.map(phv);
						phEntity = phRepo.saveAndFlush(phEntity);

						List<FeesBreakup> fbl = fbService.map(v.getFbl());
						for (FeesBreakup fb : fbl) {
							fb.setPatientId(phv.getPatientId());
							fb.setPrescriptionId(phEntity.getPrescriptionId());
							fbRepo.save(fb);
						}
						fbRepo.flush();

						//TODO: Check if already exists and then insert
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
//			} catch (Exception e) {
//				e.printStackTrace();
//				log.error(e.getMessage());
//			}
		}
		response.setRespMsg("Server error");
		return response;
	}

	@Override
	public List<DashboardView> getDashboard(Long patientId, Long prescriptionId) {

		List<DashboardView> dashboardViews = new ArrayList<>();
		PatientView p1 = pService.findById(patientId);
		if(null == p1 || null == p1.getPId()){
			throw new ValidationException(ErrorCode.INVALID_PATIENT_ID);
		}
		if(null == prescriptionId){
			List<PrescriptionHistoryView> prescriptionHistoryViews = phService.mapAll(phRepo.findByPatientId(patientId));
			prescriptionHistoryViews.stream().forEach(pView -> {
				
				DashboardView view = new DashboardView();
				view.setpHistory(pView);
				view.getFbl().addAll(fbService.mapAll(fbRepo.findByPrescriptionId(pView.getPrescriptionId())));
				view.getMedhv().addAll(medService.mapAll(medRepo.getMedicineHistoryByPrescriptionId(pView.getPrescriptionId())));
				view.getMhv().addAll(mhService.mapAll(mhRepo.getByPrescriptionId(pView.getPrescriptionId())));
				view.getTphv().addAll(tphService.findByPrescriptionId(pView.getPrescriptionId()));
				
				dashboardViews.add(view);
			});
		}else{
			PrescriptionHistoryView pView = phService.findOne(prescriptionId);
			DashboardView view = new DashboardView();
			view.setpHistory(pView);
			view.getFbl().addAll(fbService.mapAll(fbRepo.findByPrescriptionId(pView.getPrescriptionId())));
			view.getMedhv().addAll(medService.mapAll(medRepo.getMedicineHistoryByPrescriptionId(pView.getPrescriptionId())));
			view.getMhv().addAll(mhService.mapAll(mhRepo.getByPrescriptionId(pView.getPrescriptionId())));
			view.getTphv().addAll(tphService.findByPrescriptionId(pView.getPrescriptionId()));
			
			dashboardViews.add(view);
		}
		return dashboardViews;
	}

}
