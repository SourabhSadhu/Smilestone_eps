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
import com.my.portal.model.DashboardRequest;
import com.my.portal.model.DashboardView;
import com.my.portal.service.DashboardService;

@Controller
@RequestMapping("/dashboard")
public class DashboardController {

	@Autowired DashboardService dService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/add-dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addPrescription(@RequestBody DashboardView view){
		try{
			return new ResponseEntity<>(CommonUtils.getResp(dService.processPrescription(view)), HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/get-dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> getDashboard(@RequestParam(value="patientId", required = true) Long patientId) {
		try{
			return new ResponseEntity<>(CommonUtils.getResp(dService.getDashboard(patientId)), HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

}
