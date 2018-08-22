package com.my.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.portal.CommonUtils;
import com.my.portal.ValidationException;
import com.my.portal.model.ClinicalFindingView;
import com.my.portal.service.ClinicalFindingService;

@Controller
@RequestMapping(value = "/clinical-finding")
public class ClinicalFindingController {

	@Autowired
	ClinicalFindingService cfService;
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-all", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get() {
		try {
			return new ResponseEntity<>(CommonUtils.getResp(cfService.findAll()), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.GET, value = "/get-clinical-finding", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getPatient(
			@RequestParam(required = true, value="name") String name,
			@RequestParam(required = true, value="toothIndex") long toothIndex,
			@RequestParam(required = true, value="ageGrpIndex") String ageGrpIndex
			) {
			
		try {
			return new ResponseEntity<>(CommonUtils.getResp(cfService.findByNameToothAgeGrp(name, toothIndex, ageGrpIndex)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add-clinical-finding", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addPatient(@RequestBody ClinicalFindingView view) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(cfService.addClinicalFinding(view)), HttpStatus.OK);
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
