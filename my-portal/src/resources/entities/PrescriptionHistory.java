package com.my.portal.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


/**
 * The persistent class for the prescription_history database table.
 * 
 */
@Entity
@SequenceGenerator(name="PRESCRIPTION_HISTORY_PRESCRIPTIONID_GENERATOR", sequenceName="prescription_id_seq", allocationSize = 1, schema = "eps")
@Table(name="prescription_history")
@NamedQueries({
	@NamedQuery(name="PrescriptionHistory.findAll", query="SELECT p FROM PrescriptionHistory p"),
	@NamedQuery(name="PrescriptionHistory.findByPatientId", query="SELECT p FROM PrescriptionHistory p WHERE p.patient.pId = :patientId"),
	@NamedQuery(name="PrescriptionHistory.getByDateRange", query="SELECT p FROM PrescriptionHistory p")
})
public class PrescriptionHistory implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PRESCRIPTION_HISTORY_PRESCRIPTIONID_GENERATOR")
	@Column(name="prescription_id")
	private Long prescriptionId;

	private String advice;

	@Column(name="chief_complaint")
	private String chiefComplaint;

	@Column(name="clinical_findings")
	private String clinicalFindings;

	private String investigation;
	
	private String medicines;

	@Column(name="next_appointment")
	private Timestamp nextAppointment;

	private String note;

	@Column(name="personal_diagnosis")
	private String personalDiagnosis;

	@Column(name="treatment_done")
	private String treatmentDone;

	@Column(name="treatment_plan")
	private String treatmentPlan;

	@Column(name="ts_created")
	private Timestamp tsCreated;

	@Column(name="ts_modified")
	private Timestamp tsModified;

	//bi-directional many-to-one association to FeesBreakup
	@OneToMany(mappedBy="prescriptionHistory")
	private List<FeesBreakup> feesBreakups;

	//bi-directional many-to-one association to MedicineHistory
	@OneToMany(mappedBy="prescriptionHistory")
	private List<MedicineHistory> medicineHistories;
	
	//bi-directional many-to-one association to MedicineHistory
	@OneToMany(mappedBy="prescriptionHistory")
	private List<MedicalHistory> medicalHistories;

	//bi-directional many-to-one association to Patient
	@ManyToOne
	@JoinColumn(name="patient_id")
	private Patient patient;

	public PrescriptionHistory() {
	}

	public Long getPrescriptionId() {
		return this.prescriptionId;
	}

	public void setPrescriptionId(Long prescriptionId) {
		this.prescriptionId = prescriptionId;
	}

	public String getAdvice() {
		return this.advice;
	}

	public void setAdvice(String advice) {
		this.advice = advice;
	}

	public String getChiefComplaint() {
		return this.chiefComplaint;
	}

	public void setChiefComplaint(String chiefComplaint) {
		this.chiefComplaint = chiefComplaint;
	}

	public String getClinicalFindings() {
		return this.clinicalFindings;
	}

	public void setClinicalFindings(String clinicalFindings) {
		this.clinicalFindings = clinicalFindings;
	}

	public String getInvestigation() {
		return this.investigation;
	}

	public void setInvestigation(String investigation) {
		this.investigation = investigation;
	}

	public String getMedicines() {
		return this.medicines;
	}

	public void setMedicines(String medicines) {
		this.medicines = medicines;
	}

	public Timestamp getNextAppointment() {
		return this.nextAppointment;
	}

	public void setNextAppointment(Timestamp nextAppointment) {
		this.nextAppointment = nextAppointment;
	}

	public String getNote() {
		return this.note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public String getPersonalDiagnosis() {
		return this.personalDiagnosis;
	}

	public void setPersonalDiagnosis(String personalDiagnosis) {
		this.personalDiagnosis = personalDiagnosis;
	}

	public String getTreatmentDone() {
		return this.treatmentDone;
	}

	public void setTreatmentDone(String treatmentDone) {
		this.treatmentDone = treatmentDone;
	}

	public String getTreatmentPlan() {
		return this.treatmentPlan;
	}

	public void setTreatmentPlan(String treatmentPlan) {
		this.treatmentPlan = treatmentPlan;
	}

	public Timestamp getTsCreated() {
		return this.tsCreated;
	}

	public void setTsCreated(Timestamp tsCreated) {
		this.tsCreated = tsCreated;
	}

	public Timestamp getTsModified() {
		return this.tsModified;
	}

	public void setTsModified(Timestamp tsModified) {
		this.tsModified = tsModified;
	}

	public List<FeesBreakup> getFeesBreakups() {
		return this.feesBreakups;
	}

	public void setFeesBreakups(List<FeesBreakup> feesBreakups) {
		this.feesBreakups = feesBreakups;
	}

	public FeesBreakup addFeesBreakup(FeesBreakup feesBreakup) {
		getFeesBreakups().add(feesBreakup);
		feesBreakup.setPrescriptionHistory(this);

		return feesBreakup;
	}

	public FeesBreakup removeFeesBreakup(FeesBreakup feesBreakup) {
		getFeesBreakups().remove(feesBreakup);
		feesBreakup.setPrescriptionHistory(null);

		return feesBreakup;
	}

	public List<MedicineHistory> getMedicineHistories() {
		return this.medicineHistories;
	}

	public void setMedicineHistories(List<MedicineHistory> medicineHistories) {
		this.medicineHistories = medicineHistories;
	}

	public MedicineHistory addMedicineHistory(MedicineHistory medicineHistory) {
		getMedicineHistories().add(medicineHistory);
		medicineHistory.setPrescriptionHistory(this);

		return medicineHistory;
	}

	public MedicineHistory removeMedicineHistory(MedicineHistory medicineHistory) {
		getMedicineHistories().remove(medicineHistory);
		medicineHistory.setPrescriptionHistory(null);

		return medicineHistory;
	}

	public List<MedicalHistory> getMedicalHistories() {
		return null == this.medicalHistories || this.medicalHistories.isEmpty() ? new ArrayList<>() : this.medicalHistories;
	}

	public void setMedicalHistories(List<MedicalHistory> medicalHistories) {
		this.medicalHistories = medicalHistories;
	}

	public MedicalHistory addMedicalHistory(MedicalHistory medicalHistory) {
		getMedicalHistories().add(medicalHistory);
		medicalHistory.setPrescriptionHistory(this);

		return medicalHistory;
	}

	public MedicalHistory removeMedicalHistory(MedicalHistory medicalHistory) {
		getMedicalHistories().remove(medicalHistory);
		medicalHistory.setPrescriptionHistory(null);

		return medicalHistory;
	}
	public Patient getPatient() {
		return this.patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}