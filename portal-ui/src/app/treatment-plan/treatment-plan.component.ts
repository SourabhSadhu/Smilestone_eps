import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

import { TreatmentPlanHistoryView, TreatmentPlanStatus, TreatmentPlan } from '../models/models';
import { TreatmentPlanService } from '../services/treatment-plan.service'
import { HttpcommService } from '../services/httpcomm.service';


@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit {

  trtmntPlanHistListDataSource = new MatTableDataSource<TreatmentPlanHistoryView>()
  trtmntPlanHistListViewColumns = ['tname', 'clinicalFinding', 'toothIndex', 'note', 'tsCreated']

  trtmntPlanListDataSource = new MatTableDataSource<TreatmentPlanHistoryView>()
  trtmntPlanListViewColumns = ['tname', 'clinicalFinding', 'toothIndex', 'action']
  showTrtmentPlanSuggestionList = false
  showTrtmentPlanAdditionSection = false
  selectedTreatmentPlanHistView = new TreatmentPlanHistoryView()
  requestLoading = false //Progress bar at the time request loading
  treatmentPlanHistories: TreatmentPlanHistoryView[] = [];
  treatmentStatusForm = new FormControl()
  treatmentStatusList : string[] = []
  selectedTreatmentPlanStatus : string //selector value

  constructor(public treatmentPlanService: TreatmentPlanService, public httpComService : HttpcommService) { }

  ngOnInit() { 
    this.treatmentStatusList.push(TreatmentPlanStatus.COMPLETED.valueOf())
    this.treatmentStatusList.push(TreatmentPlanStatus.PENDING.valueOf())
  }

  // Show treatment plan list from prescription history
  getSuggestionList() {
    let suggestions = this.treatmentPlanService.getTreatmentPlanSuggestionViewList();
    if (suggestions && suggestions.length > 0) {
      this.showTrtmentPlanSuggestionList = true
      this.trtmntPlanListDataSource.data = suggestions;
    }
  }

  //Show custom addition section from suggestion list or for manual addition
  addTphv(tphv: TreatmentPlanHistoryView = null, index: number = 0) {
    this.showTrtmentPlanSuggestionList = false
    this.showTrtmentPlanAdditionSection = true
    if (tphv || tphv != null) {
      this.selectedTreatmentPlanHistView = tphv
      this.selectedTreatmentPlanStatus = tphv.status
    }else{
      this.selectedTreatmentPlanHistView = new TreatmentPlanHistoryView()
      this.selectedTreatmentPlanStatus = ''
    }
  }

  deleteSelectedTphv() {
    this.showTrtmentPlanAdditionSection = false
    this.selectedTreatmentPlanHistView = new TreatmentPlanHistoryView()
  }

  //Fetch previous entries
  fetchTphvList() {
    this.treatmentPlanHistories = this.treatmentPlanService.getTreatmentDoneHistoryViewList()
    if (this.treatmentPlanHistories && this.treatmentPlanHistories.length > 0) {
      this.trtmntPlanHistListDataSource.data = this.treatmentPlanHistories;
    }
  }

  addTreatmentPlan(){
    if(this.validateData()){
      this.selectedTreatmentPlanHistView.patientId = this.treatmentPlanService.getPatientId()
      this.selectedTreatmentPlanHistView.prescriptionId = this.treatmentPlanService.getPrescriptionId()
      this.selectedTreatmentPlanHistView.status = this.treatmentStatusForm.value
      console.log("Add Treatment Plan", JSON.stringify(this.selectedTreatmentPlanHistView))
      let url : string = this.httpComService.getAddTreatmentPlanUrl+'?patientId='+this.treatmentPlanService.getPatientId()+'&prescriptionId='+this.treatmentPlanService.getPrescriptionId()
      console.log("URL", JSON.stringify(url))
      this.httpComService.genericPostRequest(
        url, 
        this.selectedTreatmentPlanHistView, 
        "Add Treatment Plan"
        ).subscribe( resp => {
        if(resp.status == "SUCCESS"){
          //Update History
        }
      })
    }
  }

  validateData() : boolean {
    if(!this.selectedTreatmentPlanHistView) return false
    if(!this.selectedTreatmentPlanHistView.clinicalFinding || this.selectedTreatmentPlanHistView.clinicalFinding.length <= 0) return false
    if(!this.selectedTreatmentPlanHistView.tname || this.selectedTreatmentPlanHistView.tname.length <= 0) return false
    if(!this.selectedTreatmentPlanHistView.toothIndex) return false
    if(!this.treatmentStatusForm.value || this.treatmentStatusForm.value.length <= 0) return false
    if(!this.treatmentPlanService.getPatientId()) return false
    if(!this.treatmentPlanService.getPrescriptionId()) return false
    return true
  }

}
