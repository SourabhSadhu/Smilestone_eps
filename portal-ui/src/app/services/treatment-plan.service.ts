import { Injectable } from '@angular/core';
import { TreatmentPlanHistoryView, TreatmentPlanStatus } from '../models/models'

@Injectable({
  providedIn: 'root'
})
export class TreatmentPlanService {

  private treatmentPlanHistoryViewList: TreatmentPlanHistoryView[]
  private patientId: number
  private prescriptionId: number

  constructor() { }

  setTreatmentData(patientId: number,
    prescriptionId: number,
    treatmentPlanHistoryViewList: TreatmentPlanHistoryView[]
  ) {
    this.patientId = patientId
    this.prescriptionId = prescriptionId
    this.treatmentPlanHistoryViewList = treatmentPlanHistoryViewList;
  }

  // setPrescriptionDetails(patientId: number, prescriptionId: number) {
  //   this.patientId = patientId
  //   this.prescriptionId = prescriptionId
  // }

  getTreatmentPlanSuggestionViewList(): TreatmentPlanHistoryView[] {
    return (this.treatmentPlanHistoryViewList.length > 0) ? this.treatmentPlanHistoryViewList.filter(tph => tph.status == TreatmentPlanStatus.PENDING) : []
  }

  getTreatmentDoneHistoryViewList(): TreatmentPlanHistoryView[] {
    return (this.treatmentPlanHistoryViewList.length > 0) ? this.treatmentPlanHistoryViewList.filter(tph => tph.status == TreatmentPlanStatus.COMPLETED) : []
  }

  getPatientId(): number {
    return this.patientId
  }
  
  getPrescriptionId(): number {
    return this.prescriptionId
  }
}
