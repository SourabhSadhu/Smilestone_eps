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

  getPatientId(): number {
    return this.patientId
  }

  getPrescriptionId(): number {
    return this.prescriptionId
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

  updateTreatmentPlan(treatmentPlan : TreatmentPlanHistoryView){
    console.log(`Before splice ${this.treatmentPlanHistoryViewList}`)
    let existingTreatmentPlanIndex = this.treatmentPlanHistoryViewList.findIndex(tph => tph.tid == treatmentPlan.tid)
    console.log(`index = ${existingTreatmentPlanIndex}`)
    if(existingTreatmentPlanIndex && existingTreatmentPlanIndex >= 0){
      this.treatmentPlanHistoryViewList.splice(existingTreatmentPlanIndex, 1)
    }
    this.treatmentPlanHistoryViewList.push(treatmentPlan)    
    console.log(`After update ${this.treatmentPlanHistoryViewList}`)
  }
}
