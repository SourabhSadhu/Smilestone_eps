package com.my.portal.service;

import com.my.portal.model.DashboardRequest;
import com.my.portal.model.DashboardView;

public interface DashboardService {

	boolean processPrescription(DashboardView v);
	DashboardView getDashboard(DashboardRequest r);
}
