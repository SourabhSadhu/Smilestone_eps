package com.my.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.portal.model.DashboardView;
import com.my.portal.service.DashboardService;

@Controller
@RequestMapping("/dashboard")
public class DashboardController {

	@Autowired DashboardService dService;
	
	@RequestMapping(method = RequestMethod.POST, value = "/add-prescription", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> addPrescription(@RequestBody DashboardView view){
		try{
			return new ResponseEntity<>(dService.processPrescription(view), HttpStatus.OK);
		}catch(Exception e){
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
}
