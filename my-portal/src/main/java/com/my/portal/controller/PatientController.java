package com.my.portal.controller;

import java.util.List;

import org.slf4j.LoggerFactory;
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
import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.model.ApiResponse;
import com.my.portal.model.PatientView;
import com.my.portal.model.ResponseStatus;
import com.my.portal.service.PatientService;

import ch.qos.logback.classic.Logger;

@Controller
@RequestMapping(value = "/patient")
public class PatientController {

	@Autowired
	PatientService patientService;
	private final Logger logger = (Logger) LoggerFactory.getLogger(getClass());
	
	@RequestMapping(method = RequestMethod.GET, value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get() {
		ApiResponse resp = new ApiResponse();
		resp.setDesc("Dummy API");
		resp.setStatus(ResponseStatus.SUCCESS);
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/get-patient", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getPatient(@RequestBody PatientView p) {
			
		try {
			if(null == p) {
				throw new ValidationException(ErrorCode.INVALID_INPUT);
			}
			List<PatientView> pList = patientService.getPatient(p);
			return new ResponseEntity<>(CommonUtils.getResp(pList), HttpStatus.OK);
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

	@RequestMapping(method = RequestMethod.POST, value = "/add-patient", produces = MediaType.APPLICATION_JSON_VALUE/*, consumes=MediaType.TEXT_PLAIN_VALUE*/)
	@ResponseBody
	public ResponseEntity<?> addPatient(@RequestBody PatientView p) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(patientService.addPatient(p)), HttpStatus.OK);
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
}
