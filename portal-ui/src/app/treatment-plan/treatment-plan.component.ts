import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

import { TreatmentPlanHistoryView, TreatmentPlanStatus } from '../models/models';
import { TreatmentPlanService } from '../services/treatment-plan.service'
import { EventServiceService } from '../services/event-service.service'
import { HttpcommService } from '../services/httpcomm.service';
import { SnackbarModel } from '../snackhelper/snackbar-model';
import { CommonService } from '../services/commonservice.service';
import { from, Subscription } from 'rxjs';


@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit, OnDestroy {

  /**
   * As event emitter is working, so need to send reference as we need to operate on data
   * Hence communicating via server
   */
  // @Input() treatmentTabPatientId : number
  // @Input() treatmentTabPrescriptionId : number
  // @Input() treatmentTabTreatmentPlanHistoryViews : TreatmentPlanHistoryView[]

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
  snackBarModel : SnackbarModel

  //Event emitter via subscribe method
  subscription: Subscription;

  constructor(
    public treatmentPlanService: TreatmentPlanService,
    private eventService : EventServiceService,
    public httpComService : HttpcommService,
    public snackBar: MatSnackBar, public commonService : CommonService
    ) { 
      this.subscription = eventService.getEvent().subscribe(isDataLoaded => {
        if(isDataLoaded){
          //Prepare the list
          // this.getSuggestionList()
          this.fetchTphvList()
        }
      })
    }

  ngOnInit() { 
    this.treatmentStatusList.push(TreatmentPlanStatus.COMPLETED.valueOf())
    this.treatmentStatusList.push(TreatmentPlanStatus.PENDING.valueOf())
    this.snackBarModel = new SnackbarModel()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  // Show treatment plan list from prescription history
  getSuggestionList() {
    let suggestions = this.treatmentPlanService.getTreatmentPlanSuggestionViewList();
    // let suggestions = this.treatmentTabTreatmentPlanHistoryViews.filter(tph => tph.status == TreatmentPlanStatus.PENDING)
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
    // this.treatmentPlanHistories = this.treatmentTabTreatmentPlanHistoryViews
    if (this.treatmentPlanHistories && this.treatmentPlanHistories.length > 0) {
      this.trtmntPlanHistListDataSource.data = this.treatmentPlanHistories;
    }
  }

  addTreatmentPlan(){
    if(this.validateData()){
      this.selectedTreatmentPlanHistView.patientId = this.treatmentPlanService.getPatientId()
      this.selectedTreatmentPlanHistView.prescriptionId = this.treatmentPlanService.getPrescriptionId()
      // this.selectedTreatmentPlanHistView.patientId = this.treatmentTabPatientId
      // this.selectedTreatmentPlanHistView.prescriptionId = this.treatmentTabPrescriptionId
      this.selectedTreatmentPlanHistView.status = this.treatmentStatusForm.value
      console.log("Add Treatment Plan", JSON.stringify(this.selectedTreatmentPlanHistView))
      let url : string = this.httpComService.getAddTreatmentPlanUrl+'?patientId='+this.selectedTreatmentPlanHistView.patientId + '&prescriptionId='+ this.selectedTreatmentPlanHistView.prescriptionId
      console.log("URL", JSON.stringify(url))
      this.httpComService.genericPostRequest(
        url, 
        this.selectedTreatmentPlanHistView, 
        "Add Treatment Plan"
        ).subscribe( resp => {
        if(resp.status == "SUCCESS"){
          //Update History
          this.showTrtmentPlanAdditionSection = false
          // this.treatmentPlanService.updateTreatmentPlan(this.selectedTreatmentPlanHistView)
          this.commonService.showSuccessSnackBar(this.snackBar)
          this.selectedTreatmentPlanHistView = new TreatmentPlanHistoryView()
        }else{
          this.commonService.showErrorSnackBar(this.snackBar)
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
    if(!this.selectedTreatmentPlanHistView.patientId) return false
    if(!this.selectedTreatmentPlanHistView.prescriptionId) return false
    return true
  }

}
