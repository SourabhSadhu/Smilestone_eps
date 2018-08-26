package com.my.portal.service;

import java.sql.Timestamp;
import java.util.List;

import com.my.portal.entities.PrescriptionHistory;
import com.my.portal.model.PrescriptionHistoryView;

public interface PrescriptionHistoryService {

	List<PrescriptionHistoryView> findByPatientId(Long patientId);
	List<PrescriptionHistoryView> getByDateRange(Timestamp startDate, Timestamp endDate);
	PrescriptionHistoryView findOne(Long id);
	PrescriptionHistoryView addPrescription(PrescriptionHistoryView v);
	PrescriptionHistoryView map(PrescriptionHistory e);
	List<PrescriptionHistoryView> map(List<PrescriptionHistory> e);
	PrescriptionHistory map(PrescriptionHistoryView v);
}
