package com.my.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.portal.CommonUtils;
import com.my.portal.ValidationException;
import com.my.portal.service.MedicineService;

@Controller
@RequestMapping(value = "/medicine")
public class MedicineController {

	@Autowired MedicineService mService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-medicine", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get(@RequestParam(required = true, value = "trtmntId") Long trtmntId,
								@RequestParam(required = true, value = "ageGrp") String ageGrp) 
	{
		try {
			return new ResponseEntity<>(CommonUtils.getResp(mService.getMedicineByTreatmentNameAndAgeGrp(trtmntId, ageGrp)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	/*@RequestMapping(method = RequestMethod.GET, value = "/get-by-pID", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getByPatientId(@RequestParam(required = true, value="patientID") Long pID) {			
		try {
			return new ResponseEntity<>(CommonUtils.getResp(mhService.getByPatientId(pID)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-by-name", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getByMedicalHistoryName(@RequestParam(required = true, value="name") String name) {			
		try {
			return new ResponseEntity<>(CommonUtils.getResp(mhService.getByMedicalHistoryName(name)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add-medical-history", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addPatient(@RequestBody MedicalHistoryView view) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(mhService.addMedicalHistory(view)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-medical-master", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getMedicalHistory() {			
		try {
			return new ResponseEntity<>(CommonUtils.getResp(mhmService.getMedicalHistoryMaster()), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}*/
}
