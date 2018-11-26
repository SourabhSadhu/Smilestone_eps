package com.my.portal.service;

import java.util.List;

import com.my.portal.model.DashboardView;

public interface DashboardService {

	boolean processPrescription(DashboardView v);
	List<DashboardView> getDashboard(Long patientId, Long prescriptionId);
}
