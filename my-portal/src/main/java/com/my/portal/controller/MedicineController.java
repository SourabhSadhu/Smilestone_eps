package com.my.portal.controller;

import org.slf4j.LoggerFactory;
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

import ch.qos.logback.classic.Logger;

@Controller
@RequestMapping(value = "/medicine")
public class MedicineController {

	@Autowired MedicineService mService;
	private final Logger logger = (Logger) LoggerFactory.getLogger(getClass());
	
	@RequestMapping(method = RequestMethod.GET, value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getAll() 
	{
		try {
			return new ResponseEntity<>(CommonUtils.getResp(mService.getAll()), HttpStatus.OK);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-medicine", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get(@RequestParam(required = true, value = "trtmntId") Long trtmntId,
								@RequestParam(required = true, value = "age") String age) 
	{
		try {
			return new ResponseEntity<>(CommonUtils.getResp(mService.getMedicineByTreatmentNameAndAge (trtmntId, age)), HttpStatus.OK);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
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
