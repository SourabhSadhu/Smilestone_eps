import { Component, OnInit, Inject } from '@angular/core';
import {
  ClinicalFindingView, MedicalMaster, Patient, PrescriptionHistoryView,
  ToothQuadrentView, TreatmentPlan, FeesBreakupView, FeeConfigView,
  MedicalHistoryView, MedicineHistoryView, DashboardView, MedicineView, TreatmentPlanHistoryView,
  CompositDialogBoxData, ClinicalFindingToothMapping, DashboardResponse, TreatmentPlanStatus
} from '../models/models';
import { MatSnackBar } from '@angular/material';
import { SnackbarModel } from '../snackhelper/snackbar-model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpcommService } from '../services/httpcomm.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { Observable, pipe, of } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { CommonService } from '../services/commonservice.service';
import { TreatmentPlanService } from '../services/treatment-plan.service'
import { MatTableDataSource } from '@angular/material/table';
import { EventServiceService } from '../services/event-service.service';
import { Router } from '@angular/router';

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
  isDisabledToModify: boolean //Toggle for exisiting prescription
  patientDataSource: Patient[];
  columnsToDisplay = ['firstName', 'lastName', 'age', 'weight'];
  expandedElement: Patient;
  prescriptionHistoryView: PrescriptionHistoryView;
  feesConfigListView: FeeConfigView[];

  medicalHistoryView: MedicalHistoryView;
  medicalHistoryForm = new FormControl();
  medicalHistoryViewModel: string[];

  medicineMasterViewList: MedicineView[];
  medicineForm = new FormControl()
  medicineHistoryViewModel: string
  mhList: MedicalMaster[] = [];

  dashboardView: DashboardView;
  clinicalFindings: ClinicalFindingView[];
  toothQuadrents: ToothQuadrentView[];
  dialogData = new CompositDialogBoxData();

  cftMapArray: ClinicalFindingToothMapping[];
  clinicalFindingsViewForUi: string[]; //To show selected clinical findings to tooth mapping
  treatmentPlanListView: string[]; //To show selected treatment plans
  treatmentPlanList: TreatmentPlan[] = [];
  treatmentPlanFormControl = new FormControl()

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  feesConfigListViewColumns: string[] = ['treatmentPlanId', 'baseFee', 'ageGroupId', 'ageGroupPercent', 'toothGroupId', 'toothGroupPercent', 'totalFee', 'amountPaid', 'notes'];
  feesConfigListDataSource: MatTableDataSource<FeeConfigView>;

  disableTabs: boolean = true;
  //Enable treatment done tab on prescription repeat or after submitting prescription
  disableTreatmentDoneTab = true;
  snackModel = new SnackbarModel()
  ageGroup = ""

  prescriptionFromControl = new FormControl(0);
  minCharToSearch = 3;

  // treatmentTabPatientId: number
  // treatmentTabPrescriptionId: number
  // treatmentTabTreatmentPlanHistoryViews: TreatmentPlanHistoryView[]

  constructor(public snackBar: MatSnackBar,
    public dialog: MatDialog, public httpCom: HttpcommService,
    public treatmentPlanService: TreatmentPlanService, public commonService: CommonService
    , private eventService: EventServiceService, public router: Router
  ) { }

  ngOnInit() {
    this.initializeValiables();
    // this.commonService = new CommonService();
  }

  loadTabSpecificData(tabIndex: number) {
    switch (tabIndex) {
      //Patient search page
      case 0:
        break
      //Patient history page
      case 1:
        break
      //Prescription page
      case 2:
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
        this.httpCom.getAllMedicine().subscribe(
          resp => {
            if (resp.status == 'SUCCESS') {
              this.medicineMasterViewList = resp.resp;
            }
          }
        )
        break
      //Treatment done page
      case 3:

        //Event emit
        this.eventService.sendEvent(true)
        break
      default:
        break
    }
  }

  refreshSearch() {
    this.isPatientLoading = false;
    this.isPatientLoaded = false;
    this.isPatientSelected = false;
    this.tabSelection(0);
    this.disableTabs = true
    this.initializeValiables()
    this.patientDataSource = []
    this.prescriptionId = undefined
  }

  initializeValiables() {
    this.selectedPatient = new Patient();
    this.prescriptionHistoryView = new PrescriptionHistoryView();
    this.isPatientLoading = false;
    this.isPatientLoaded = false;
    this.isPatientSelected = false;
    this.isDisabledToModify = false;
    this.dashboardDataSource = new MatTableDataSource<DashboardView>()
    this.medicalHistoryViewModel = [];
    this.clinicalFindingsViewForUi = [];
    this.cftMapArray = [];
    this.treatmentPlanListView = [];
    this.feesConfigListView = [];
    this.feesConfigListDataSource = new MatTableDataSource<FeeConfigView>();
  }

  fetchPatient(event: any) {
    // console.log(event.key);
    if (
      (this.selectedPatient.firstName !== undefined &&
        this.selectedPatient.firstName.length >= this.minCharToSearch) ||
      (this.selectedPatient.lastName !== undefined &&
        this.selectedPatient.lastName.length >= this.minCharToSearch)) {
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
  searchPatient(){
    //search patient
    this.isPatientLoading = true;
    this.isPatientLoaded = false;
    this.httpCom.getPatient(this.selectedPatient).subscribe(resp => {
      if (resp) {
        if (resp.status && resp.status === 'SUCCESS') {
          if (resp.status.length > 0) {
            this.patientDataSource = resp.resp;
          }else{
            this.commonService.showSuccessSnackBar(this.snackBar, "No record found")
          }
        }else{
          this.commonService.showErrorSnackBar(this.snackBar, resp.desc)
        }
      } else {
        this.commonService.showErrorSnackBar(this.snackBar)
      }
      this.isPatientLoaded = true;
      this.isPatientLoading = false;
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
    this.disableTabs = false;
    this.tabSelection(1);
    this.fetchDashboard(element.pid)
  }

  prescriptionId : number
  searchPrescription() {
    console.log('Prescription ID: ' + this.prescriptionId)
    if (this.prescriptionId && this.prescriptionId > 0) {
      this.httpCom.getSinglePrescriptionDetail(this.prescriptionId).subscribe(dashboardResp => {
        if (dashboardResp) {
          if (dashboardResp.status == 'SUCCESS') {
            this.tabSelection(2)
            if (dashboardResp.resp && dashboardResp.resp.length > 0) {
              //Fetch patient details
              let dashboard :DashboardView = dashboardResp.resp[0];
              let patient = new Patient()
              patient.pid = dashboard.pHistory.patientId
              this.httpCom.getPatient(patient).subscribe(patientResp => {
                if(patientResp && patientResp.status == 'SUCCESS'){
                  this.selectedPatient = patientResp.resp[0];
                  this.disableTabs = false;
                  this.selectPrescription(dashboard);
                }
              })
            } else {
              this.commonService.showSuccessSnackBar(this.snackBar, dashboardResp.desc)
            }
          } else {
            this.commonService.showErrorSnackBar(this.snackBar, dashboardResp.desc)
          }
        } else {
          this.commonService.showErrorSnackBar(this.snackBar)
        }
      })
    }
  }

  tabSelection(tabIndex: number) {
    this.prescriptionFromControl.setValue(tabIndex);
  }

  /************************************************************************************************************
   ************************************************************************************************************
   ***************************************** History Section **************************************************
   ************************************************************************************************************
   ************************************************************************************************************
   */

  dashboardHistoryListColumns = ['Date', 'C/F', 'Treatment Plan', 'Treatment Done', 'Due', 'Next Appo']
  dashboardDataSource: MatTableDataSource<DashboardView>
  fetchDashboard(patientId: number) {

    this.httpCom.getDashboardView(patientId).subscribe(
      resp => {
        if (resp.status === 'SUCCESS' && resp.resp) {
          if (resp.resp && resp.resp.length > 0) {
            this.dashboardDataSource = new MatTableDataSource<DashboardView>()
            this.dashboardDataSource.data = resp.resp
          } else {
            this.tabSelection(2)
          }
        } else {
          this.commonService.showErrorSnackBar(this.snackBar, resp.desc, () => { this.tabSelection(2) })
          this.tabSelection(2)
        }
      }
    )
  }

  getDueFee(feesList: FeesBreakupView[]): number {
    let due = 0
    feesList.map(fee => {
      due += fee.amount - fee.amountPaid
      // error
    })
    return due
  }

  getTreatmentDoneHistoryView(treatmentPlanHistoryViews: TreatmentPlanHistoryView[]): TreatmentPlanHistoryView[] {
    return (treatmentPlanHistoryViews && treatmentPlanHistoryViews.length > 0) ? treatmentPlanHistoryViews.filter(tph => tph.status == TreatmentPlanStatus.COMPLETED) : []
  }

  //populate prescription details
  selectPrescription(dashboard: DashboardView) {

    this.tabSelection(2)
    this.isDisabledToModify = true
    this.prescriptionId = dashboard.pHistory.prescriptionId
    if (dashboard.pHistory) {
      this.prescriptionHistoryView = dashboard.pHistory
      if (dashboard.pHistory.clinicalFindings.length > 0) {
        this.clinicalFindingsViewForUi = dashboard.pHistory.clinicalFindings.split(',')
      }
      this.medicalHistoryViewModel = []
      dashboard.mhv.forEach(e => {
        this.medicalHistoryViewModel.push(e.medicalHistoryName)
      })
      this.medicineHistoryViewModel = ''
      dashboard.medhv.forEach(e => {
        this.medicineHistoryViewModel += (e.medicineName + ' ' + e.dosage + '\n')
      })
      //Create cftMapArray
      this.cftMapArray = []
      if (dashboard.pHistory &&
        dashboard.pHistory.clinicalFindings &&
        dashboard.pHistory.clinicalFindings.length > 0) {

        let clinicalFinidingToothComposite = dashboard.pHistory.clinicalFindings.split(',');
        clinicalFinidingToothComposite.forEach(e => {
          let clinicalFindingComposite = e.split(' - ')
          if (clinicalFindingComposite.length == 2) {
            let clinicalFindingDerived = clinicalFindingComposite[0];
            let toothComposite = clinicalFindingComposite[1].split(' ')
            toothComposite.forEach(tooth => {
              let cft = new ClinicalFindingToothMapping()
              cft.teeth = new ToothQuadrentView()
              cft.clinicalFinding = new ClinicalFindingView()
              if (!isNaN(parseInt(tooth, 10))) {
                cft.teeth.toothIndex = parseInt(tooth, 10)
                cft.clinicalFinding.fname = clinicalFindingDerived
                let treatmentPlanList = dashboard.tphv.filter(tph => tph.clinicalFinding == clinicalFindingDerived && tph.toothIndex == cft.teeth.toothIndex)
                if (treatmentPlanList && treatmentPlanList.length > 0) {
                  cft.treatmentPlanViewModel = treatmentPlanList[0].tname
                }
              }
              this.cftMapArray.push(cft)
            })
          }
        })
        this.trtmntPlanListDataSource.data = this.cftMapArray

        //Creating Treatment Plan History Data
        this.disableTreatmentDoneTab = false
        this.treatmentPlanService.setTreatmentData(dashboard.pHistory.patientId, dashboard.pHistory.prescriptionId, dashboard.tphv)

        /**
         * As event emitter is working, so need to send reference as we need to operate on data
         * Hence communicating via server
         */
        // Injecting variable references
        // this.treatmentTabPatientId = dashboard.pHistory.patientId
        // this.treatmentTabPrescriptionId = dashboard.pHistory.prescriptionId
        // this.treatmentTabTreatmentPlanHistoryViews = dashboard.tphv

        this.httpCom.getAgeGroup(this.selectedPatient.age.toString()).subscribe(resp => {
          if (resp && resp.status === 'SUCCESS') {
            this.ageGroup = resp.resp.groupId
          }
        })
        this.feesConfigListView = []
        dashboard.fbl.forEach(fee => {
          let feeConf = new FeeConfigView()
          feeConf.treatmentPlanId = fee.trtmntPlanRef
          feeConf.totalFee = fee.amount
          feeConf.amountPaid = fee.amountPaid
          feeConf.notes = fee.notes
          feeConf.ageGroupId = this.ageGroup
          this.feesConfigListView.push(feeConf)
        })
        this.getTotalFee()
        this.feesConfigListDataSource.data = this.feesConfigListView
      }
    }
  }

  checkIfDisabledToModify(): boolean {
    return this.isDisabledToModify
  }

  /************************************************************************************************************
   ************************************************************************************************************
   ***************************************** Prescription Section *********************************************
   ************************************************************************************************************
   ************************************************************************************************************
   */

  resetPrescriptionData() {
    this.commonService.showSuccessSnackBar(this.snackBar, "Are you sure to reset all data? ", () => {
      this.isDisabledToModify = false;
      this.dashboardView = new DashboardView();
      this.prescriptionHistoryView = new PrescriptionHistoryView();
      this.medicalHistoryViewModel = [];
      this.medicalHistoryForm = new FormControl();
      this.clinicalFindingsViewForUi = [];
      this.cftMapArray = [];
      this.treatmentPlanListView = [];
      this.feesConfigListView = [];
      this.feesConfigListDataSource = new MatTableDataSource<FeeConfigView>();
      this.checkIfDisabledToModify()
    });
  }

  getOrderedClinicalFindings(cf: string): string[] {
    if (cf && cf.length > 0) return cf.split(',')
  }

  //Prescription Section
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
                    if (this.cftMapArray.length == 0) {
                      this.cftMapArray = result;
                    } else {
                      result.map(r => this.cftMapArray.push(r))
                    }
                    for (let i = 0; i < this.cftMapArray.length; i++) {
                      this.clinicalFindingsViewForUi.push(
                        this.commonService.combineValForStringArray(
                          this.clinicalFindingsViewForUi, this.cftMapArray[i].clinicalFinding.fname,
                          this.cftMapArray[i].teeth.toothIndex.toString()
                        )
                      )
                    }
                    this.createTreatmentPlanTable()
                  }
                });
              }
            }
          );
        }
      }
    );
  }

  totalFees: number = 0;
  totalPaidFees: number = 0
  totalDueFees: number = 0
  getTotalFee() {
    this.totalFees = this.feesConfigListView && this.feesConfigListView.length > 0 ?
      this.feesConfigListView.map(fee => fee.totalFee).reduce((prevTotal, curr) => prevTotal + curr, 0) :
      0;
    this.getTotalPaidFee()
    // return this.totalFees;
  }

  getTotalPaidFee() {
    this.totalPaidFees = this.feesConfigListView && this.feesConfigListView.length > 0 ?
      this.feesConfigListView.map(fee => fee.amountPaid).reduce((prevTotal, curr) => prevTotal + curr, 0) :
      0;
    this.getTotalDueFee()
    // return this.totalPaidFees
  }

  getTotalDueFee() {
    this.totalDueFees = this.totalFees - this.totalPaidFees
    return this.totalDueFees
  }

  addCustomFee() {

    const dialogFeeRef = this.dialog.open(CustomFeeInsertionDialog, {
      width: '700px',
      data: this.treatmentPlanList
    });

    dialogFeeRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result) {
        let customFeeConfigView: FeeConfigView = result;
        customFeeConfigView.ageGroupId = this.ageGroup
        if (this.feesConfigListView == undefined || this.feesConfigListView.length == 0) {
          this.feesConfigListView = []
        }
        this.feesConfigListView.push(customFeeConfigView)
        this.feesConfigListDataSource.data = this.feesConfigListView
        this.getTotalFee()
      }
    });
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

  removeFees(index: number) {
    this.feesConfigListView.splice(index, 1);
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
    try {
      // console.log('next appo ' + event.value.getTime());
      this.prescriptionHistoryView.nextAppointment = event.value.getTime()
      if (0 <= this.nextAppoHour && this.nextAppoHour <= 24 && 0 <= this.nextAppoMinute && this.nextAppoMinute <= 59) {
        let modifiedTime = ((this.nextAppoHour * 60) + this.nextAppoMinute) * 60 * 1000 + event.value.getTime()
        // console.log('next appo ' + modifiedTime);
      }
    } catch (error) {
      console.log(error)
      this.snackModel.msg = "Invalid Date"
      this.snackModel.action = "OK"
      this.snackModel.callback = () => {
        console.log("Retry allowed")
      }
      this.commonService.showSnackBar(this.snackBar, this.snackModel)
    }
  }

  nextAppoHour = 0;
  nextAppoMinute = 0;
  createNextAppoTime() {
    // console.log(`NextAppo Hour ${this.nextAppoHour} Minute ${this.nextAppoMinute}`)
  }

  minDate: Date = new Date();
  todayMillis = this.minDate.getTime();
  maxMillis = this.todayMillis + (5 * 86400 * 1000);
  maxDate = new Date(this.maxMillis);


  trtmntPlanListDataSource = new MatTableDataSource<ClinicalFindingToothMapping>()
  trtmntPlanListViewColumns = ['cf', 'teeth', 'plan', 'newPlan']

  //Get all dialog box data from this.cftMapArray
  createTreatmentPlanTable() {
    this.trtmntPlanListDataSource.data = this.cftMapArray
  }

  updateTrtmntPlanSelect(value: string, index: number) {

    this.treatmentPlanList.filter(data => {
      if (data.trtName == value) {
        if (this.cftMapArray.length > index) {
          this.cftMapArray[index].treatmentPlanName = value
          if (value === 'Other') {
            this.cftMapArray[index].customTrtmntPlan = true
          }
          let toothGrpIndex = this.cftMapArray[index].teeth.toothGroup
          let treatmentId = data.trtId

          this.httpCom.getFeeConfig(this.selectedPatient.age, toothGrpIndex, treatmentId).subscribe(resp => {
            if (resp && resp.status === 'SUCCESS') {
              let feeConfigData: FeeConfigView = resp.resp;
              if (feeConfigData && feeConfigData.totalFee > 0) {
                this.feesConfigListView.push(feeConfigData);
                this.feesConfigListDataSource.data = this.feesConfigListView;
                this.getTotalFee();
              }
            } else {
              //Show error and open custom feeaddition section
              this.snackModel.msg = "Please add custom fee"
              this.snackModel.action = "OK"
              this.snackModel.callback = () => {
                this.addCustomFee()
              }
              this.commonService.showSnackBar(this.snackBar, this.snackModel)
            }
          });
        }
      }
      // console.log('Updated cft', this.cftMapArray)

      //Getting filtered medicines
      //TOBE DONE LATER
      // this.httpCom.getMedicineView(this.httpCom.getMedicineUrl
      //   + this.httpCom.getMedicineUrlPart1
      //   + data.trtId
      //   + this.httpCom.getMedicineUrlPart2
      //   + this.selectedPatient.age
      // ).subscribe(
      //   resp => {
      //     if (resp.status === 'SUCCESS') {
      //       resp.resp.map(medicineMasterView => {
      //         this.medicineMasterViewList.push(medicineMasterView);
      //       });
      //     } else {
      //       console.log('resp error: ' + resp);
      //     }
      //   }
      // );
    })
  }

  updateTrtmntPlanI(value: string, index: number) {
    this.cftMapArray[index].treatmentPlanName = value
  }

  dashboardResponse: DashboardResponse
  createAndSubmitPrescription() {

    this.dashboardView = new DashboardView();
    this.dashboardView.fbl = []
    if (this.feesConfigListView && this.feesConfigListView.length > 0) {
      this.feesConfigListView.map(f => {
        let fb = new FeesBreakupView()
        fb.amount = f.totalFee
        fb.notes = f.notes
        fb.trtmntPlanRef = f.treatmentPlanId
        fb.patientId = this.selectedPatient.pid
        fb.amountPaid = f.amountPaid
        this.dashboardView.fbl.push(fb)
      })
    }
    this.dashboardView.medhv = []
    if (this.medicineForm.value && this.medicineForm.value.length > 0) {
      this.medicineForm.value.map(m => {
        let medh = new MedicineHistoryView()
        medh.medicineName = m.medicineName
        medh.diseaseCode = m.diseaseCode
        medh.diseaseName = m.diseaseName
        medh.dosage = m.dosage
        medh.patientId = this.selectedPatient.pid
        this.dashboardView.medhv.push(medh)
      })
    }
    this.dashboardView.mhv = [];
    // if (this.medicalHistoryForm.value && this.medicalHistoryForm.value.length > 0) {
    if (this.medicalHistoryViewModel && this.medicalHistoryViewModel.length > 0) {
      // medicalHistoryViewModel
      this.medicalHistoryForm.value.map(v => {
        let view = new MedicalHistoryView();
        view.medicalHistoryName = v;
        view.patientId = this.selectedPatient.pid;
        this.dashboardView.mhv.push(view);
      });
    }
    this.dashboardView.pHistory = this.prescriptionHistoryView
    this.dashboardView.pHistory.patientId = this.selectedPatient.pid
    this.dashboardView.pHistory.clinicalFindings = this.commonService.getFormattedClinicalFindingsForPost(this.clinicalFindingsViewForUi)
    this.dashboardView.tphv = []
    this.cftMapArray.map(cft => {
      let tph = new TreatmentPlanHistoryView()
      tph.patientId = this.selectedPatient.pid
      tph.tname = cft.treatmentPlanName
      tph.toothIndex = cft.teeth.toothIndex
      tph.clinicalFinding = cft.clinicalFinding.fname
      this.dashboardView.tphv.push(tph)
    })

    console.log(JSON.stringify(this.dashboardView))
    this.httpCom.addDashBoard(this.dashboardView).subscribe(
      resp => {
        if (resp.status === 'SUCCESS') {
          //Do something and print prescription
          console.log(JSON.stringify(resp.resp));
          // this.printPrescription();
          this.dashboardResponse = resp.resp
          if (this.dashboardResponse && this.dashboardResponse.status) {
            this.isDisabledToModify = true
            this.treatmentPlanService.setTreatmentData(this.dashboardResponse.patientId, this.dashboardResponse.prescriptionId, this.dashboardView.tphv)

            /**
             * As event emitter is working, so need to send reference as we need to operate on data
             * Hence communicating via server
             */
            //Injecting variable references
            // this.treatmentTabPatientId = dashboardResponse.patientId
            // this.treatmentTabPrescriptionId = dashboardResponse.prescriptionId
            // this.treatmentTabTreatmentPlanHistoryViews = this.dashboardView.tphv

            this.snackModel.isError = false
            this.snackModel.msg = "Prescription added"
            this.snackModel.action = "OK"
            this.snackModel.callback = () => {
              //navigate to treatment plan tab
              this.tabSelection(3)
            }
            this.commonService.showSnackBar(this.snackBar, this.snackModel)
          } else {
            this.snackModel.isError = true
            this.snackModel.msg = "Server error"
            this.snackModel.action = "OK"
            this.commonService.showSnackBar(this.snackBar, this.snackModel)
          }
        }
      }
    );
  }

  printPrescription() {
    console.log('Patient ID'+this.selectedPatient.pid)
    console.log('Prescription ID'+this.prescriptionId)
    if(this.dashboardResponse && this.dashboardResponse.patientId && this.dashboardResponse.prescriptionId){
      this.router.navigate(['print'],{queryParams: { patientId:this.dashboardResponse.patientId , prescriptionId:this.dashboardResponse.prescriptionId}})
    }else if(this.isDisabledToModify){
      this.router.navigate(['print'],{queryParams: { patientId:this.selectedPatient.pid , prescriptionId:this.prescriptionId}})
    }
  }
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
    @Inject(MAT_DIALOG_DATA) public data: CompositDialogBoxData,
    public httpCom: HttpcommService) { }

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
        else return -1;
      });
  }

  checkTooth(t: ToothQuadrentView) {
    t.selected = !t.selected;
  }

  //Scope for new clinical findingds

  customCFName: string = ''
  customCFDesc: string = ''

  //In case of other add the other data in db and process as usual if async add is on
  add() {
    if (this.originalCfList.includes(this.clinicalFindingForm.value)) {

      // let selectedToothList: number[] = this.toothForm.value;

      let selectedToothIndexes: string = '';
      this.data.toothQuadrentsComposite.map(tooth => {
        if (tooth.selected) {
          let cft = new ClinicalFindingToothMapping();
          cft.teeth = tooth;
          selectedToothIndexes = tooth.toothIndex.toString();

          let formValue: string = this.clinicalFindingForm.value
          if (formValue === 'Others') {
            formValue = this.customCFName
          }

          //Combining tooth index for cf
          this.cfTextToBeShownOnUi.push(new CommonService().combineValForStringArray(
            this.cfTextToBeShownOnUi, formValue, selectedToothIndexes
          ))

          if (this.clinicalFindingForm.value === 'Others') {
            let cf = new ClinicalFindingView();
            cf.fname = this.customCFName;
            cf.fdesc = this.customCFDesc;
            cft.clinicalFinding = cf;

            this.httpCom.addClinicalFinding(cf).subscribe(resp => {
              if (resp.status === 'SUCCESS') {
                //TODO: Show message
                console.log('CF added')
              }
            })

          } else {
            this.data.clinicalFindingsComposite.map(cf => {
              if (cf.fname === this.clinicalFindingForm.value) {
                // console.log(`Match for ${this.clinicalFindingForm.value}`)
                cft.clinicalFinding = cf
              }
            })

          }
          tooth.selected = false;
          this.cftMapArray.push(cft);
        }
      });
    } else {
      // Show error
    }
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
  }
}


@Component({
  selector: 'custom-fee-insert',
  templateUrl: 'custom-fee-insert.html',
  styleUrls: ['./create-prescription.component.css'],
})
export class CustomFeeInsertionDialog {

  treatmentPlanDescsObservable: Observable<string[]>;
  treatmentPlanDescs: string[];
  treatmentPlanForm = new FormControl();
  feeConfigView = new FeeConfigView()

  constructor(
    public dialogRef: MatDialogRef<CustomFeeInsertionDialog>,
    @Inject(MAT_DIALOG_DATA) public treatmentPlans: TreatmentPlan[]) {
    if (treatmentPlans && treatmentPlans.length > 0) {
      this.treatmentPlanDescs = [];
      treatmentPlans.forEach(tpls => {
        this.treatmentPlanDescs.push(tpls.trtDesc);
      })
    }
  }

  ngOnInit() {
    this.startTreatmentPlanFilter();
  }

  onNoClick(): void {
    this.dialogRef.close();
  };

  closeDialog() {
    if (!isNaN(this.feeConfigView.totalFee) && !isNaN(this.feeConfigView.amountPaid)) {
      this.getCustomFee()
      this.dialogRef.close(this.feeConfigView);
    }
  }

  startTreatmentPlanFilter() {
    this.treatmentPlanDescsObservable = this.treatmentPlanForm.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    return this.treatmentPlanDescs.filter(desc => desc.toLowerCase().includes(value.toLowerCase()));
  }

  getCustomFee() {
    if (this.treatmentPlanForm.value && this.treatmentPlanForm.value.length > 0) {
      let filterdList = this.treatmentPlans.filter(tDesc => this.treatmentPlanForm.value == tDesc.trtDesc)
      if (filterdList && filterdList.length > 0) {
        this.feeConfigView.treatmentPlanId = filterdList[0].trtId
      }
    }
  }
}