export class Response {

    status: string;
    desc: string;
    resp: any;
};
export class ClinicalFindingView {
    fid: number;
    fdesc: string;
    fname: string;
};
export class MedicalMaster {
    medicalHistoryName: string;
};
export class Patient {
    bloodGroup: string;
    contactNo1: number;
    contactNo2: number;
    discountType: string;
    discount: number;
    dobDd: number;
    dobMm: number;
    dobYy: number;
    dobTimestamp: number;
    firstName: string;
    lastName: string;
    tsCreated: number;
    weight: number;
    height: number;
    // image: string;
    email: string;
    address1: string;
    address2: string;
    age: number;
    pid: number;
    sex: string;
};
export interface BloodGroup {
    value: string;
    viewValue: string;
};
export class PrescriptionHistoryView {
    prescriptionId: number;
    advice: string;
    chiefComplaint: string;
    clinicalFindings: string;
    investigation: string;
    medicines: string;
    nextAppointment: number;
    note: string;
    patientId: number;
    provisionalDiagnosis: string;
    treatmentDone: string;
    treatmentPlan: string;
    tsCreated: number;
    tsModified: number;
};
export class ToothQuadrentView {
    toothIndex: number;
    toothGroup: number;
    toothNumber: number;
    toothQdr: number;
    selected: boolean = false;
};
export class TreatmentPlan {
    trtId: number;
    trtDesc: string;
    trtName: string;
    clinicalFinding: number;
};
export class MedicineView {
    medicineName: string;
    ageGroup: string;
    treatmentId: number;
    dosage: string;
    clinicalAvailability: number;
    diseaseCode: string;
    diseaseName: string;
    medicineId: number;
};

export class FeesBreakupView {
    fId: number;
    amount: number;
    trtmntPlanRef: number;
    notes: string;
    patientId: number;
    prescriptionId: number;
    tsCreated: number;
};

export class FeeConfigView {
    feeConfigId: number;
    ageGroupid: string;
    ageGroupPercent: number;
    baseFee: number;
    toothGroupid: number;
    toothGroupPercent: number;
    treatmentPlanId: number;
    totalFee: number;
    notes?: string;
}

export class FeeConfigRequestListView {
    tooth_grp_idx: number;
    trtmnt_id: number;
}

export class MedicalHistoryView {
    medicalHistoryId: number;
    medicalHistoryName : string
    note: string;
    patientId : number;
    prescriptionId : number;
    severity: string;
    startedFrom: number;
}
export class MedicineHistoryView {
    medId: number;
    diseaseCode: string;
    diseaseName: string;
    dosage: string;
    medicineName: string
    patientId: number;
    prescriptionId: number;
}
export class DashboardView {
    pHistory: PrescriptionHistoryView;
    fbl: FeesBreakupView[];
    mhv: MedicalHistoryView[];
    medhv: MedicineHistoryView[];
}