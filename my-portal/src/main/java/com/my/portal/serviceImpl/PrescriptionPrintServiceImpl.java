package com.my.portal.serviceImpl;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.joda.time.LocalDate;
import org.joda.time.Period;
import org.joda.time.PeriodType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.my.portal.model.MedicalHistoryView;
import com.my.portal.model.MedicineHistoryView;
import com.my.portal.model.PatientView;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.model.PrescriptionPrintModel;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.PrescriptionPrintService;

@Service
public class PrescriptionPrintServiceImpl implements PrescriptionPrintService {

	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService prescriptionHistoryService;
	@Autowired MedicineService medicineService;
//	@Autowired FeesBreakupService fessBreakupService;
	@Autowired MedicalHistoryService medicalHistoryService;
	private final String DEPARTMENT = "department";
	private final String DOCTOR = "doctor";
	private final String DATE_TIME_FORMAT = "dd-MM-yyyy hh:mm aa";
//	private final String DATE_FORMAT = "dd-MM-yyyy";
//	private final String TIME_FORMAT = "hh:mm aa";
//	private long totalAmount = 0;
//	private long paidAmount = 0;
	private String medicalHistoryViewString = "";
	
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
				
				List<MedicalHistoryView> medicalHistoryView = medicalHistoryService.getByPatientId(patientId);
				medicalHistoryView.forEach(mhv -> {
					medicalHistoryViewString += mhv.getMedicalHistoryName().concat(", ");
				});
				medicalHistoryViewString = medicalHistoryViewString.substring(0,medicalHistoryViewString.length() - 2);
				prescriptionPrintModel.setMedicalHistory(medicalHistoryViewString);
				
				List<MedicineHistoryView> medicineHistories = medicineService.getMedicineHistoryByPrescriptionId(prescriptionId);				
				if(null != medicineHistories && !medicineHistories.isEmpty()){
					prescriptionPrintModel.setMedicine(new ArrayList<>());
				}
				for(MedicineHistoryView mh : medicineHistories){					
					prescriptionPrintModel.getMedicine().add(mh.getMedicineName().concat(" ").concat(mh.getDosage()));
				}				
			}
		}
		return prescriptionPrintModel;
	}
	
	PrescriptionPrintModel mapTo(PatientView reqPatient, PrescriptionHistoryView reqPrescription){
		SimpleDateFormat sdf = new SimpleDateFormat(DATE_TIME_FORMAT);
		PrescriptionPrintModel response = new PrescriptionPrintModel();
		response.setAdvice(reqPrescription.getAdvice());
		response.setAge(getPatientAge(reqPatient.getDobTimestamp()));
		response.setChiefComplain(reqPrescription.getChiefComplaint());
		response.setClinicalFindings(reqPrescription.getClinicalFindings());
		response.setDepartment(System.getProperty(DEPARTMENT, "Oral and Maxillofacial Surgery OPD"));
		response.setDoctor(System.getProperty(DOCTOR, "Dr. Mitrasen Manna / Dr. Aparna Gupta"));
		response.setName(reqPatient.getFirstName().concat(" ").concat(reqPatient.getLastName()));
		response.setClinicalFindings(reqPrescription.getClinicalFindings());
		response.setPrintableNotes(reqPrescription.getPrintableNotes());
		response.setPrescriptionId(Long.toString(reqPrescription.getPrescriptionId()));
		
		if(null != reqPrescription.getNextAppointment()){
			Date nextAppoTs = new Date(reqPrescription.getNextAppointment().getTime());
			response.setNextAppointmentDateTime(sdf.format(nextAppoTs));
		}
		response.setPhoneNo(null != reqPatient.getContactNo1() ? reqPatient.getContactNo1().toString()
				.concat(null != reqPatient.getContactNo2() ? " / ".concat(reqPatient.getContactNo2().toString()) : "") : "");
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
















