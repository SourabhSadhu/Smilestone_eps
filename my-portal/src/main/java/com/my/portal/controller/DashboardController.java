package com.my.portal.controller;

import org.slf4j.LoggerFactory;
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
import com.my.portal.model.DashboardView;
import com.my.portal.service.DashboardService;

import ch.qos.logback.classic.Logger;

@Controller
@RequestMapping("/dashboard")
public class DashboardController {

	@Autowired DashboardService dService;
	
	private final Logger logger = (Logger) LoggerFactory.getLogger(getClass());

	@RequestMapping(method = RequestMethod.GET, value = "/get-dashboard-count", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getDashboardCount(
			@RequestParam(value="patientId", required = true) Long patientId			
			) {
		try{
			return new ResponseEntity<>(CommonUtils.getResp(dService.getDashboardCount(patientId)), HttpStatus.OK);
		}catch(Exception e){
			logger.error(e.getMessage(), e);
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getDashboard(
			@RequestParam(value="patientId", required = false) Long patientId,
			@RequestParam(value="prescriptionId", required = false) Long prescriptionId
			) {
		try{
			return new ResponseEntity<>(CommonUtils.getResp(dService.getDashboard(patientId, prescriptionId)), HttpStatus.OK);
		}catch(Exception e){
			logger.error(e.getMessage(), e);
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add-dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addPrescription(@RequestBody DashboardView view){
		try{
			return new ResponseEntity<>(CommonUtils.getResp(dService.processPrescription(view)), HttpStatus.OK);
		}catch(Exception e){
			logger.error(e.getMessage(), e);
			e.printStackTrace();
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/update-dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> updatePrescription(@RequestBody DashboardView view){
		try{
			return new ResponseEntity<>(CommonUtils.getResp(dService.updatePrescription(view)), HttpStatus.OK);
		}catch(Exception e){
			logger.error(e.getMessage(), e);
			e.printStackTrace();
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
}
