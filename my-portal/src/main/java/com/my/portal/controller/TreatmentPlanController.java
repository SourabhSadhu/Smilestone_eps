package com.my.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.portal.CommonUtils;
import com.my.portal.ValidationException;
import com.my.portal.service.TreatmentPlanHistoryService;
import com.my.portal.service.TreatmentPlanService;

@Controller
@RequestMapping(value = "/trtmnt")
public class TreatmentPlanController {
	
	@Autowired TreatmentPlanService tpService;
	@Autowired TreatmentPlanHistoryService tphService;

	@RequestMapping(method = RequestMethod.GET, value = "/get-plan"/*, produces = MediaType.TEXT_PLAIN_VALUE*/)
	@ResponseBody
	public ResponseEntity<?> getPlan(
				@RequestParam(value = "trtmntId", required = false) Long trtmntId,
				@RequestParam(value = "trtmntName", required = false) String trtmntName
			){
		try {
			if(StringUtils.hasText(trtmntName)){
				return new ResponseEntity<>(CommonUtils.getResp(tpService.findByTreatmentName(trtmntName)), HttpStatus.OK);
			}else if(null != trtmntId && 0 < trtmntId.longValue()){
				return new ResponseEntity<>(CommonUtils.getResp(tpService.findByClinicalFindingsID(trtmntId)), HttpStatus.OK);
			}else{
				return new ResponseEntity<>(CommonUtils.getResp(tpService.findAll()), HttpStatus.OK);
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
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-hist", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get() 
	{
		try {
			return new ResponseEntity<>(CommonUtils.getResp(tphService.findByPatientID(1L)), HttpStatus.OK);
		} catch (Exception e) {
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
