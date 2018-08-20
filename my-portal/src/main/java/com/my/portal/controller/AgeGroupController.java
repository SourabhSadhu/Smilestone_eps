package com.my.portal.controller;

import java.math.BigDecimal;

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
import com.my.portal.ValidationException;
import com.my.portal.entities.AgeGroup;
import com.my.portal.service.AgeGroupService;

@RestController
@RequestMapping(value = "/age-group")
public class AgeGroupController {

	@Autowired
	AgeGroupService ageGrpService;

	@RequestMapping(method = RequestMethod.GET, value = "/getAgeGroup", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getAgeGroup(@RequestParam(required = false, value = "age") BigDecimal age) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(ageGrpService.getFromAgeToAge(age)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/addAgeGroup", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addAgeGroup(@RequestBody AgeGroup ageGroup) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(ageGrpService.addAgeGrp(ageGroup)), HttpStatus.OK);
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
