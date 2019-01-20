package com.my.portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.my.portal.CommonUtils;
import com.my.portal.service.PrescriptionPrintService;

@Controller
@RequestMapping(value = "/prescription-print")
public class PrescriptionPrintController {

	@Autowired
	PrescriptionPrintService prescriptionPrintService;

	@RequestMapping(method = RequestMethod.GET, value = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<?> get(@RequestParam(required = true, value = "patientId") long patientId,
			@RequestParam(required = true, value = "prescriptionId") long prescriptionId) {
		return new ResponseEntity<>(
				CommonUtils.getResp(prescriptionPrintService.getPrescrition(patientId, prescriptionId)), HttpStatus.OK);
	}

}
