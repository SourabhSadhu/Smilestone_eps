package com.my.portal.controller;

import java.util.ArrayList;
import java.util.List;

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
import com.my.portal.model.FeeConfigRequestListView;
import com.my.portal.model.FeeConfigView;
import com.my.portal.service.FeeConfigService;
import com.my.portal.service.FeesBreakupService;

@RestController
@RequestMapping(value = "/fee")
public class FeeController {

	@Autowired	FeesBreakupService fbService;
	@Autowired	FeeConfigService fcService;

	
	@RequestMapping(method = RequestMethod.GET, value = "/get-config", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getFeeConfig(
			@RequestParam(required = true, value = "age") Long age,
			@RequestParam(required = true, value = "tooth_grp_idx") Long toothGrpIdx,
			@RequestParam(required = true, value = "trtmnt_id") Long trtmntId
			) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(fcService.getFeeConfig(age, trtmntId, toothGrpIdx)), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

	@RequestMapping(method = RequestMethod.POST, value = "/get-config-list", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getFeeConfigList(
			@RequestParam(required = true, value = "age") Long age,
			@RequestBody List<FeeConfigRequestListView> listView) {

		try {
			if(null != listView && !listView.isEmpty()){
				List<FeeConfigView> data = new ArrayList<>();
				listView.forEach( d -> {
					data.add(fcService.getFeeConfig(age, d.getTrtmnt_id(), d.getTooth_grp_idx()));
				});
				return new ResponseEntity<>(CommonUtils.getResp(data), HttpStatus.OK);
			}
			
			return new ResponseEntity<>(CommonUtils.getResp(null, ErrorCode.INVALID_INPUT), HttpStatus.OK);
		} catch (Exception e) {
			if(e instanceof ValidationException) {
				ValidationException ve = (ValidationException) e;
				return new ResponseEntity<>(CommonUtils.getResp(null, ve.getValidationPayload()), HttpStatus.OK);
			}else {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	
	@RequestMapping(method = RequestMethod.POST, value = "/add-fee-config", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addFeeConfig(@RequestBody FeeConfigView view) {

		try {
			return new ResponseEntity<>(CommonUtils.getResp(fcService.addFeeConfig(view)), HttpStatus.OK);
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
