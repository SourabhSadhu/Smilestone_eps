package com.my.portal.service;

import java.util.List;

import com.my.portal.model.DashboardResponse;
import com.my.portal.model.DashboardView;

public interface DashboardService {

	Long getDashboardCount(Long patientId);
	List<DashboardView> getDashboard(Long patientId, Long prescriptionId, Long page, Long size);	
	DashboardResponse processPrescription(DashboardView v);
	DashboardResponse updatePrescription(DashboardView v);
}
