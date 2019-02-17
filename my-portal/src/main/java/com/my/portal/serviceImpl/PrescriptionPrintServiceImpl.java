package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.joda.time.LocalDate;
import org.joda.time.Period;
import org.joda.time.PeriodType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.my.portal.model.MedicalHistoryView;
import com.my.portal.model.MedicineHistoryView;
import com.my.portal.model.PatientView;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.model.PrescriptionPrintModel;
import com.my.portal.model.TreatmentPlanHistoryView;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.PrescriptionPrintService;
import com.my.portal.service.TreatmentPlanHistoryService;

@Service
public class PrescriptionPrintServiceImpl implements PrescriptionPrintService {

	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService prescriptionHistoryService;
	@Autowired MedicineService medicineService;
	@Autowired MedicalHistoryService medicalHistoryService;
	@Autowired TreatmentPlanHistoryService tphService;
	private final String DATE_TIME_FORMAT = "dd-MM-yyyy hh:mm aa";
	private String medicalHistoryViewString = "";
	private final long MILLIS_IN_A_DAY = 86400000l;
	
	@Override
	public PrescriptionPrintModel getPrescrition(long patientId, long prescriptionId) {
		
		PrescriptionPrintModel prescriptionPrintModel = null;
		if(patientId > 0 && prescriptionId > 0){
			PatientView patientView = pService.findById(patientId);
			PrescriptionHistoryView prescriptionHistoryView = prescriptionHistoryService.findOne(prescriptionId);
			if(null != patientView && null != prescriptionHistoryView){
				prescriptionPrintModel = mapTo(patientView, prescriptionHistoryView);
//				List<FeesBreakupView> feesBreakupView = fessBreakupService.findByPatientAndPrescriptionId(patientId, prescriptionId);				
//				
//				feesBreakupView.stream().forEach(fb -> {
//					if(null != fb.getAmount()){
//						totalAmount += fb.getAmount().longValue();
//					}
//					if(null != fb.getAmountPaid()){
//						paidAmount += fb.getAmountPaid().longValue();
//					}
//				});
//				prescriptionPrintModel.setAmountTotal(Long.toString(totalAmount));
//				prescriptionPrintModel.setAmountPaid(Long.toString(paidAmount));
//				prescriptionPrintModel.setAmountDue(Long.toString(totalAmount - paidAmount));
				medicalHistoryViewString = "";
				List<MedicalHistoryView> medicalHistoryView = medicalHistoryService.getByPrescriptionId(prescriptionId);
				medicalHistoryView.forEach(mhv -> {
					if(StringUtils.hasText(medicalHistoryViewString)){						
						medicalHistoryViewString += ", ";
					}
					medicalHistoryViewString += mhv.getMedicalHistoryName();
				});
				
				prescriptionPrintModel.setMedicalHistory(medicalHistoryViewString);
				
				List<MedicineHistoryView> medicineHistories = medicineService.getMedicineHistoryByPrescriptionId(prescriptionId);				
				if(null != medicineHistories && !medicineHistories.isEmpty()){
					prescriptionPrintModel.setMedicineAll(new ArrayList<>());
					prescriptionPrintModel.setMedicineCurrent(new ArrayList<>());

					long lastMedicineTs = 0l;
					if(null != medicineHistories.get(0).getTsCreated()){
						lastMedicineTs = medicineHistories.get(0).getTsCreated();
					}
					for(MedicineHistoryView mh : medicineHistories){					
						prescriptionPrintModel.getMedicineAll().add(mh.getMedicineName().concat(" ").concat(mh.getDosage()));
						if(lastMedicineTs > 0 && lastMedicineTs - mh.getTsCreated() <= MILLIS_IN_A_DAY){
							prescriptionPrintModel.getMedicineCurrent().add(mh.getMedicineName().concat(" ").concat(mh.getDosage()));
						}
					}		
				}				
				List<TreatmentPlanHistoryView> tphv = tphService.findByPatientAndPrescriptionId(patientId, prescriptionId);
				prescriptionPrintModel.setTphv(tphv);
				prescriptionPrintModel.setTphvCompleted(tphv.stream().filter(tph -> {
//					if(StringUtils.hasText(tph.getStatus()) && tph.getStatus().equals("Completed")) return true;
					if(null != tph.getTsCreated() && System.currentTimeMillis() - tph.getTsCreated() <= MILLIS_IN_A_DAY) return true;
					if(null != tph.getTsModified() && System.currentTimeMillis() - tph.getTsModified() <= MILLIS_IN_A_DAY) return true;
					else return false;
				}).collect(Collectors.toList()));
				
			}
		}
		return prescriptionPrintModel;
	}
	
	PrescriptionPrintModel mapTo(PatientView reqPatient, PrescriptionHistoryView reqPrescription){
		SimpleDateFormat sdf = new SimpleDateFormat(DATE_TIME_FORMAT);
		PrescriptionPrintModel response = new PrescriptionPrintModel();
		response.setAdvice(reqPrescription.getAdvice());
		response.setAge(null != reqPatient.getDobTimestamp() ? getPatientAge(reqPatient.getDobTimestamp()) : "" );
		response.setSex(reqPatient.getSex());
		response.setChiefComplain(reqPrescription.getChiefComplaint());
		response.setClinicalFindings(reqPrescription.getClinicalFindings());
		response.setProvisionalDiagnosis(reqPrescription.getProvisionalDiagnosis());
		response.setName(reqPatient.getFirstName().concat(" ").concat(reqPatient.getLastName()));
		response.setPrintableNotes(reqPrescription.getPrintableNotes());
		response.setPrescriptionId(Long.toString(reqPrescription.getPrescriptionId()));
		
		if(null != reqPrescription.getNextAppointment()){
			Date nextAppoTs = new Date(reqPrescription.getNextAppointment().getTime());
			response.setNextAppointmentDateTime(sdf.format(nextAppoTs));
		}
		response.setPrescriptionId(reqPrescription.getPrescriptionId().toString());
		
		if(null != reqPatient.getTsCreated()){
			Date patientRegDate = new Date(reqPatient.getTsCreated().getTime());			
			response.setRegDate(sdf.format(patientRegDate));
		}
		response.setSex(reqPatient.getSex());
		response.setVisitNo(Long.toString(reqPrescription.getVisitCount()));
		
		Timestamp effectivePrescriptionTime = null;
		if(null != reqPrescription.getTsModified()){
			effectivePrescriptionTime = reqPrescription.getTsModified();
		}else if(null != reqPrescription.getTsCreated()){
			effectivePrescriptionTime = reqPrescription.getTsCreated();
		}
		if(null != effectivePrescriptionTime){
			response.setVisitDateTime(sdf.format(new Date(effectivePrescriptionTime.getTime())));
		}
		return response;
	}

	private String getPatientAge(long dobTs) {
		if(dobTs > 0){
			LocalDate dob = new LocalDate(dobTs);
			LocalDate current = new LocalDate(System.currentTimeMillis());
			Period p = new Period(dob, current, PeriodType.yearMonthDay());
			return Integer.toString(p.getYears()).concat(" Yrs ")
					.concat(Integer.toString(p.getMonths())).concat(" Months ")
					.concat(Integer.toString(p.getDays())).concat(" Days");
		}
		return "";
	}
	
}
















