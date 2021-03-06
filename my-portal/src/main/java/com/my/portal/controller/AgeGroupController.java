package com.my.portal.controller;

import java.math.BigDecimal;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.my.portal.CommonUtils;
import com.my.portal.ErrorCode;
import com.my.portal.ValidationException;
import com.my.portal.model.AgeGroupView;
import com.my.portal.model.ApiResponse;
import com.my.portal.model.ResponseStatus;
import com.my.portal.service.AgeGroupService;

import ch.qos.logback.classic.Logger;

@RestController
@RequestMapping(value = "/age-group")
public class AgeGroupController {

	@Autowired
	AgeGroupService ageGrpService;
	
	private final Logger logger = (Logger) LoggerFactory.getLogger(getClass());

	@RequestMapping(method = RequestMethod.GET, value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get() {
		ApiResponse resp = new ApiResponse();
		resp.setDesc("Dummy API");
		resp.setStatus(ResponseStatus.SUCCESS);
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-age-group", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getAgeGroup(@RequestParam(required = true, value = "age") BigDecimal age) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(ageGrpService.getFromAgeToAge(age)), HttpStatus.OK);
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

	@RequestMapping(method = RequestMethod.POST, value = "/add-age-group", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addAgeGroup(@RequestBody AgeGroupView ageGroupView) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(ageGrpService.addAgeGrp(ageGroupView)), HttpStatus.OK);
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
