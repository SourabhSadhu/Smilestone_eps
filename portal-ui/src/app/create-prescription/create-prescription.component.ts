import { Component, OnInit, Inject } from '@angular/core';
import { DummyResponse } from '../services/dummyresponse';
import {
  ClinicalFindingView, MedicalMaster, Patient, PrescriptionHistoryView,
  ToothQuadrentView, TreatmentPlan, FeesBreakupView,  FeeConfigView,
  MedicalHistoryView,  MedicineHistoryView, DashboardView, MedicineView, FeeConfigRequestListView
} from '../models/models';
import { MatSnackBar } from '@angular/material';
import { SnackhelperComponent } from '../snackhelper/snackhelper.component';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpcommService } from '../services/httpcomm.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Observable, pipe } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { CommonService } from '../services/commonservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CreatePrescriptionComponent implements OnInit {

  selectedPatient: Patient;
  isPatientLoading: boolean; // Toggle progress bar  
  isPatientLoaded: boolean; // Toggle patient list
  isPatientSelected: boolean; // Toggle patient details view
  patientDataSource: Patient[];
  columnsToDisplay = ['firstName', 'lastName', 'age', 'weight'];
  expandedElement: Patient;
  prescriptionHistoryView: PrescriptionHistoryView;
  feesConfigListView: FeeConfigView[];
  medicalHistoryView: MedicalHistoryView;
  medicineMasterViewList: MedicineView[];
  dashboardView: DashboardView;
  clinicalFindings: ClinicalFindingView[];
  toothQuadrents: ToothQuadrentView[];
  dialogData = new CompositDialogBoxData();
  mhList: MedicalMaster[] = [];
  
  medicalHistoryForm = new FormControl();

  cftMapArray: ClinicalFindingToothMapping[];
  clinicalFindingsView: string[]; //To show selected clinical findings to tooth mapping
  treatmentPlanListView: string[]; //To show selected treatment plans
  treatmentPlanList: TreatmentPlan[] = [];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  feesConfigListViewColumns: string[] = ['treatmentPlanId', 'baseFee', 'ageGroupId', 'ageGroupPercent', 'toothGroupId', 'toothGroupPercent', 'totalFee', 'notes'];
  feesConfigListDataSource : MatTableDataSource<FeeConfigView>;
  commonService: CommonService;

  constructor(public snackBar: MatSnackBar,
    public dialog: MatDialog, public httpCom: HttpcommService) { }

  ngOnInit() {
    this.initializeValiables();
    this.commonService = new CommonService();
  }

  prescriptionFromControl = new FormControl(0);
  minCharToSearch = 3;

  initializeValiables() {
    this.selectedPatient = new Patient();
    this.prescriptionHistoryView = new PrescriptionHistoryView();
    this.isPatientLoading = false;
    this.isPatientLoaded = false;
    this.isPatientSelected = false;
    this.clinicalFindingsView = [];
    this.httpCom.getMedicalMaster().subscribe(
      resp => {
        if (resp.status == 'SUCCESS') {
          for (let i = 0; i < resp.resp.length; i++) {
            this.mhList.push(resp.resp[i].medicalHistoryName);
          }
        }
      }
    );
    this.httpCom.getTreatmentPlan().subscribe(
      resp => {
        if (resp.status == 'SUCCESS') {
          this.treatmentPlanList = resp.resp;
        }
      }
    );
    this.treatmentPlanListView = [];
    this.medicineMasterViewList = [];
    this.feesConfigListView = [];
    this.feesConfigListDataSource = new MatTableDataSource<FeeConfigView>();
    
  }

  fetchPatient(event: any) {
    // console.log(event.key);
    if ((this.selectedPatient.firstName !== undefined && this.selectedPatient.firstName.length >= this.minCharToSearch) ||
      (this.selectedPatient.lastName !== undefined && this.selectedPatient.lastName.length >= this.minCharToSearch)) {
      this.searchPatient();
    } else {
      if (this.selectedPatient && this.selectedPatient.firstName && this.selectedPatient.firstName.length > 0
        && this.selectedPatient.lastName && this.selectedPatient.lastName.length > 0
      ) {
        this.isPatientLoading = true;
      } else {
        this.isPatientLoading = false;
      }
      this.isPatientLoaded = false;
    }
  }

  dateValidate(event: MatDatepickerInputEvent<Date>) {
    console.log('Prescptn ' + event.value);
    let parsedDate = this.commonService.getParsedDate(event.value);
    if (parsedDate && parsedDate.length == 3) {
      this.selectedPatient.dobDd = parsedDate[0];
      this.selectedPatient.dobMm = parsedDate[1];
      this.selectedPatient.dobYy = parsedDate[2];
      this.searchPatient();
    }
  }
  searchPatient() {
    //search patient
    this.isPatientLoading = true;
    this.isPatientLoaded = false;
    this.httpCom.getPatient(this.selectedPatient).subscribe(resp => {
      if (resp && resp.status === 'SUCCESS') {
        if (resp.status && resp.status.length > 0)
          this.patientDataSource = resp.resp;
        this.isPatientLoaded = true;
        this.isPatientLoading = false;
      } else {
        //TODO: navigate to add patient tab
      }
    });
  }

  mouseOverFn(element: Patient) {
    this.expandedElement = element;
  }

  mouseOutFn(element: Patient) {
    // this.expandedElement = new Patient();
  }

  selectedElement(element: Patient) {
    this.selectedPatient = element;
    this.tabSelection(1);
  }

  tabSelection(tabIndex: number) {
    this.prescriptionFromControl.setValue(tabIndex);
  }

  openDialog(): void {
    this.httpCom.getClinicalFindings().subscribe(
      response => {
        if (response.status == 'SUCCESS') {
          this.clinicalFindings = response.resp;
          this.httpCom.getToothQuadrents().subscribe(
            response => {
              if (response.status == 'SUCCESS') {
                this.toothQuadrents = response.resp;
                this.dialogData.clinicalFindingsComposite = this.clinicalFindings;
                this.dialogData.toothQuadrentsComposite = this.toothQuadrents;

                const dialogRef = this.dialog.open(DialogToothClinicalfindings, {
                  width: '700px',
                  data: this.dialogData
                });

                dialogRef.afterClosed().subscribe(result => {
                  if (result && result.length > 0) {
                    this.cftMapArray = result;
                    for (let i = 0; i < this.cftMapArray.length; i++) {
                      let teeths: string = '';
                      for (let j = 0; j < this.cftMapArray[i].teeth.length; j++) {
                        teeths += ' ' + this.cftMapArray[i].teeth[j].toothIndex;
                      }
                      this.clinicalFindingsView.push(this.cftMapArray[i].clinicalFinding.fname + ' - ' + teeths);
                      if (this.treatmentPlanList && this.treatmentPlanList.length > 0) {
                        this.treatmentPlanList.map(tpl => {
                          if (tpl.clinicalFinding == this.cftMapArray[i].clinicalFinding.fid) {

                            //Concurrency check
                            if (this.treatmentPlanListView.indexOf(tpl.trtName) < 0) {
                              this.treatmentPlanListView.push(tpl.trtName);

                              //Getting medicines
                              this.httpCom.getMedicineView(this.httpCom.getMedicineUrl
                                + this.httpCom.getMedicineUrlPart1
                                + tpl.trtId
                                + this.httpCom.getMedicineUrlPart2
                                + this.selectedPatient.age
                              ).subscribe(
                                resp => {
                                  if (resp.status === 'SUCCESS') {
                                    resp.resp.map(medicineMasterView => {
                                      this.medicineMasterViewList.push(medicineMasterView);
                                    });
                                  } else {
                                    console.log('resp error: ' + resp);
                                  }
                                }
                              );
                            }
                            //Getting fees config
                            let feeConfigRequestListView: FeeConfigRequestListView[] = [];
                            this.cftMapArray[i].teeth.forEach(t => {
                              let feeConfigRequestView = new FeeConfigRequestListView();
                              feeConfigRequestView.tooth_grp_idx = t.toothGroup;
                              feeConfigRequestView.trtmnt_id = tpl.trtId;
                              feeConfigRequestListView.push(feeConfigRequestView);
                            })
                            //Print data
                            console.log('Fee config data:', feeConfigRequestListView);

                            this.httpCom.getFeeConfigList(this.selectedPatient.age, feeConfigRequestListView).subscribe(resp => {
                              if (resp && resp.status === 'SUCCESS') {
                                resp.resp.forEach(element => {
                                  let feeConfigData : FeeConfigView = element;
                                  if(feeConfigData && feeConfigData.totalFee > 0){
                                    this.feesConfigListView.push(element);
                                    this.feesConfigListDataSource.data = this.feesConfigListView;
                                  }
                                });
                                this.getTotalFee();
                                console.log('Fee config object:', this.feesConfigListView);
                              }
                            });
                          }
                        });
                      } else {
                        console.log("Treatment plan empty");
                      }
                    }
                  }
                });
              }
            }
          );
        }
      }
    );
  }

  totalFees : number = 0;
  getTotalFee() {
    this.totalFees = this.feesConfigListView && this.feesConfigListView.length > 0 ? 
      this.feesConfigListView.map(fee => fee.totalFee).reduce((prevTotal, curr) => prevTotal + curr, 0) :
      0;
  }

  addTreatmentPlan(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.treatmentPlanListView.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  removeChip(s: string | MedicineView, n: number) {
    //Remove Treatment plan
    if (n == 1 && typeof s === 'string') {
      let idx = this.treatmentPlanListView.indexOf(s);
      if (idx >= 0) {
        this.treatmentPlanListView.splice(idx, 1);

        //TODO: Also remove medicines and fee configurations
      }
    }
    //Remove medicines
    else if (n == 2 && s instanceof MedicineView) {
      let idx = this.medicineMasterViewList.indexOf(s);
      if (idx >= 0) {
        this.medicineMasterViewList.splice(idx, 1);
      }
    }
  };

  removeFees(index : number){
    this.feesConfigListView.splice(index,1);
    this.feesConfigListDataSource.data = this.feesConfigListView;
    this.getTotalFee()
  }

  //Function for adding custom medicines
  addMedicine(event: MatChipInputEvent) {
    let customMedicineMaster = new MedicineView();
    const input = event.input;
    let data = event.value;
    if ((data || '').trim()) {
      let dataParts: string[] = data.split(' -- ');
      if (dataParts.length == 2) {
        customMedicineMaster.medicineName = dataParts[0];
        customMedicineMaster.dosage = dataParts[1];
        this.medicineMasterViewList.push(customMedicineMaster);
      } else {
        console.log('Error medicine format');
      }
    }
    if (input) {
      input.value = '';
    }
  }


  createNextAppo(event: MatDatepickerInputEvent<Date>) {
    console.log('next appo' + event.value);
    this.prescriptionHistoryView.nextAppointment = event.value.getTime()
  }

  minDate: Date = new Date();
  todayMillis = this.minDate.getTime();
  maxMillis = this.todayMillis + (5 * 86400 * 1000);
  maxDate = new Date(this.maxMillis);


  createAndSubmitPrescription() {
    this.dashboardView = new DashboardView();
    this.dashboardView.fbl = []
    this.feesConfigListView.map(f => {
      let fb = new FeesBreakupView()
      fb.amount = f.totalFee
      fb.notes = f.notes
      fb.trtmntPlanRef = f.treatmentPlanId
      fb.patientId = this.selectedPatient.pid
      this.dashboardView.fbl.push(fb)
    })
    this.dashboardView.medhv = []
    this.medicineMasterViewList.map(m=>{
      let medh = new MedicineHistoryView()
      medh.medicineName = m.medicineName
      medh.diseaseCode = m.diseaseCode
      medh.diseaseName = m.diseaseName
      medh.dosage = m.dosage
      medh.patientId = this.selectedPatient.pid
      this.dashboardView.medhv.push(medh)
    })
    
    this.dashboardView.mhv = [];
    this.medicalHistoryForm.value.map(v => {
      let view = new MedicalHistoryView();
      view.medicalHistoryName = v;
      view.patientId = this.selectedPatient.pid;
      this.dashboardView.mhv.push(view);
    });
    this.dashboardView.pHistory = this.prescriptionHistoryView
    this.dashboardView.pHistory.patientId = this.selectedPatient.pid
    console.log(JSON.stringify(this.dashboardView))
    this.httpCom.addDashBoard(this.dashboardView).subscribe(
      resp => {
        if(resp.status === 'SUCCESS'){
          //Do something and print prescription
          console.log(JSON.stringify(resp.resp));
        }
      }
    );
  }














}

export class CompositDialogBoxData {
  toothQuadrentsComposite: ToothQuadrentView[];
  clinicalFindingsComposite: ClinicalFindingView[];
}

export class ClinicalFindingToothMapping {
  clinicalFinding: ClinicalFindingView;
  teeth: ToothQuadrentView[];
}
//Dialog box to select clinical findings mapped with tooth index
@Component({
  selector: 'dialog-tooth-cf',
  templateUrl: 'dialog-tooth-cf.html',
  styleUrls: ['./create-prescription.component.css'],
})
export class DialogToothClinicalfindings {

  cfTextToBeShownOnUi = [];
  originalCfList: string[] = [];
  filteredCfList: Observable<string[]>;
  toothForm = new FormControl();
  clinicalFindingForm = new FormControl();
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  cftMapArray: ClinicalFindingToothMapping[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogToothClinicalfindings>,
    @Inject(MAT_DIALOG_DATA) public data: CompositDialogBoxData) { }

  ngOnInit() {
    for (let i = 0; i < this.data.clinicalFindingsComposite.length; i++) {
      this.originalCfList.push(this.data.clinicalFindingsComposite[i].fname);
    };
    this.startFilter1();
  }

  onNoClick(): void {
    this.dialogRef.close();
  };

  getOrderedList(grp: number, isAsc: boolean = false): ToothQuadrentView[] {

    return this.data.toothQuadrentsComposite
      .filter(tooth => tooth.toothQdr == grp)
      .sort((a: ToothQuadrentView, b: ToothQuadrentView) => {
        if (isAsc && a.toothIndex > b.toothIndex) return 1;
        else if (!isAsc && a.toothIndex < b.toothIndex) return 1;
        // return 0;
      });
  }

  checkTooth(t: ToothQuadrentView) {
    t.selected = !t.selected;
  }

  add() {
    if (this.originalCfList.includes(this.clinicalFindingForm.value)) {

      // let selectedToothList: number[] = this.toothForm.value;
      let cft = new ClinicalFindingToothMapping();
      cft.teeth = [];

      // for (let i = 0; i < selectedToothList.length; i++) {
      //   for (let j = 0; j < this.data.toothQuadrentsComposite.length; j++) {
      //     if (this.data.toothQuadrentsComposite[j].toothIndex == selectedToothList[i]) {
      //       cft.teeth.push(this.data.toothQuadrentsComposite[j]);
      //       break;
      //     }
      //   }
      // }
      let selectedToothIndexes: string = '';
      this.data.toothQuadrentsComposite.map(tooth => {
        {
          if (tooth.selected) {
            cft.teeth.push(tooth);
            selectedToothIndexes += ' ' + tooth.toothIndex;
          }
          tooth.selected = false;
        }
      });
      this.cfTextToBeShownOnUi.push(this.clinicalFindingForm.value + '-' + selectedToothIndexes);

      for (let k = 0; k < this.data.clinicalFindingsComposite.length; k++) {
        if (this.data.clinicalFindingsComposite[k].fname === this.clinicalFindingForm.value) {
          cft.clinicalFinding = this.data.clinicalFindingsComposite[k];
          break;
        }
      }
      this.cftMapArray.push(cft);
      // console.log(JSON.stringify(this.cftMapArray));
    } else {
      // Show error
    }
    // this.toothForm.setValue('');
    this.clinicalFindingForm.setValue('');
  }

  closeDialog() {
    this.dialogRef.close(this.cftMapArray);
  }

  remove(s: string): void {
    const index = this.cfTextToBeShownOnUi.indexOf(s);
    if (index >= 0) {
      this.cfTextToBeShownOnUi.splice(index, 1);
    }
    let cfName = s.substring(0, s.indexOf("-"));
    for (let l = 0; l < this.cftMapArray.length; l++) {
      if (this.cftMapArray[l].clinicalFinding.fname === cfName) {
        this.cftMapArray.splice(l, 1);
      }
    }
    // console.log(JSON.stringify(this.cftMapArray));
  }

  setSelect(t: ToothQuadrentView) {
    alert('Selected:' + t.toothIndex);
  }

  startFilter1() {
    this.filteredCfList = this.clinicalFindingForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    return this.originalCfList.filter(option => option.toLowerCase().includes(value.toLowerCase()));
    // return this.originalCfList.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
  }
}