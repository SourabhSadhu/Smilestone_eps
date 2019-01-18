package com.my.portal.service;

import com.my.portal.model.PrescriptionPrintModel;

public interface PrescriptionPrintService {

	PrescriptionPrintModel getPrescrition(long patientId, long prescriptionId);
}
