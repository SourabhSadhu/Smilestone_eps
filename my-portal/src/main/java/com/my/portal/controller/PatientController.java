package com.my.portal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.portal.CommonUtils;
import com.my.portal.ValidationException;
import com.my.portal.entities.Patient;
import com.my.portal.model.ApiResponse;
import com.my.portal.service.PatientService;

@Controller
@RequestMapping(value = "/patient")
public class PatientController {

	@Autowired
	PatientService patientService;

	@RequestMapping(method = RequestMethod.POST, value = "/getPatient", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getPatient(@RequestBody Patient p) {
			
		try {
			List<Patient> pList = patientService.getPatient(p);
			if(null != pList && !pList.isEmpty()) {
				return new ResponseEntity<>(CommonUtils.getResp(pList), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(new ApiResponse(), HttpStatus.OK);
			}
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/addPatient", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addPatient(@RequestBody Patient p) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(patientService.addPatient(p)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
}
