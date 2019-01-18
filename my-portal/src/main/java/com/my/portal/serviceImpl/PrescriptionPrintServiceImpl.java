package com.my.portal.serviceImpl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.my.portal.model.FeesBreakupView;
import com.my.portal.model.PatientView;
import com.my.portal.model.PrescriptionHistoryView;
import com.my.portal.model.PrescriptionPrintModel;
import com.my.portal.service.FeesBreakupService;
import com.my.portal.service.MedicalHistoryService;
import com.my.portal.service.MedicineService;
import com.my.portal.service.PatientService;
import com.my.portal.service.PrescriptionHistoryService;
import com.my.portal.service.PrescriptionPrintService;
import com.my.portal.service.TreatmentPlanHistoryService;

public class PrescriptionPrintServiceImpl implements PrescriptionPrintService {

	@Autowired PatientService pService;
	@Autowired PrescriptionHistoryService phService;
	@Autowired MedicineService medService;
	@Autowired FeesBreakupService fbService;
	@Autowired MedicalHistoryService mhService;
	@Autowired TreatmentPlanHistoryService tphService;
	private final String DEPARTMENT = "department";
	private final String DOCTOR = "doctor";
	private final String DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm";
	long totalAmount = 0;
	long paidAmount = 0;
	
	@Override
	public PrescriptionPrintModel getPrescrition(long patientId, long prescriptionId) {
		
		PrescriptionPrintModel prescriptionPrintModel = null;
		if(patientId > 0 && prescriptionId > 0){
			PatientView patientView = pService.findById(patientId);
			PrescriptionHistoryView prescriptionHistoryView = phService.findOne(prescriptionId);
			if(null != patientView && null != prescriptionHistoryView){
				prescriptionPrintModel = mapTo(patientView, prescriptionHistoryView);
				List<FeesBreakupView> feesBreakupView = fbService.findByPatientAndPrescriptionId(patientId, prescriptionId);				
				
				feesBreakupView.stream().forEach(fb -> {
					if(null != fb.getAmount()){
						totalAmount += fb.getAmount().longValue();
					}
					if(null != fb.getAmountPaid()){
						paidAmount += fb.getAmountPaid().longValue();
					}
				});
				prescriptionPrintModel.setAmountTotal(Long.toString(totalAmount));
				prescriptionPrintModel.setAmountPaid(Long.toString(paidAmount));
				prescriptionPrintModel.setAmountDue(Long.toString(totalAmount - paidAmount));
				
			}
		}
		return prescriptionPrintModel;
	}
	
	PrescriptionPrintModel mapTo(PatientView reqPatient, PrescriptionHistoryView reqPrescription){
		PrescriptionPrintModel response = new PrescriptionPrintModel();
		response.setAdvice(reqPrescription.getAdvice());
		long patientAge = reqPatient.getAge() - System.currentTimeMillis();
		response.setAge(getPatientAge((int) patientAge));
		response.setChiefComplain(reqPrescription.getChiefComplaint());
		response.setClinicalFindings(reqPrescription.getClinicalFindings());
		response.setDepartment(System.getProperty(DEPARTMENT, "Oral and Maxillofacial Surgery OPD"));
		response.setDoctor(System.getProperty(DOCTOR, "Dr. Mitrasen Manna/ Dr. Aparna Gupta"));
		response.setName(reqPatient.getFirstName().concat(" ").concat(reqPatient.getLastName()));
		if(null != reqPrescription.getNextAppointment()){
			Date nextAppoTs = new Date(reqPrescription.getNextAppointment().getTime());
			response.setNextAppointmentDateTime(new SimpleDateFormat(DATE_TIME_FORMAT).format(nextAppoTs));
		}
		response.setPhoneNo(null != reqPatient.getContactNo1() ? reqPatient.getContactNo1().toString()
				.concat(null != reqPatient.getContactNo2() ? " / ".concat(reqPatient.getContactNo2().toString()) : "") : "");
		response.setPrescriptionId(reqPrescription.getPrescriptionId().toString());
		
		if(null != reqPatient.getTsCreated()){
			Date patientRegDate = new Date(reqPatient.getTsCreated().getTime());			
			response.setRegDate(new SimpleDateFormat(DATE_TIME_FORMAT).format(patientRegDate));
		}
		response.setSex(reqPatient.getSex());
		return response;
	}

	private String getPatientAge(int age) {
		if(age > 0){
			Date patientAge = new Date(age);
			Calendar pCalendar = new GregorianCalendar();
			pCalendar.setTime(patientAge);
			return null != pCalendar ? Integer.toString(pCalendar.get(Calendar.YEAR)).concat(" Yrs ")
					.concat(Integer.toString(pCalendar.get(Calendar.MONTH) + 1 )).concat(" Month ")
					.concat(Integer.toString(pCalendar.get(Calendar.DAY_OF_MONTH)).concat(" Days")): "";
		}
		return "";
	}

}
















