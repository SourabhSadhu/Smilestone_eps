import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl, Validators } from '@angular/forms';

import { Patient, BloodGroup } from '../models/models';
import { HttpcommService } from '../services/httpcomm.service'
import { CommonService } from '../services/commonservice.service';
import { SnackbarModel } from '../snackhelper/snackbar-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patient : Patient;
  dashboardTabControl = new FormControl(0) //Dynamically tab selection
  dobDate = new FormControl(new Date())
  //Place holder for dynamic field validation
  config = {
    "first_name_len" : 20,
    "last_name_len" : 15
  };
  firstName : string;
  lastName : string;
  bloodGroups : BloodGroup[] = [
    {value : 'A_POSITIVE', viewValue : 'A+'},
    {value : 'A_NEGETIVE', viewValue : 'A-'},
    {value : 'B_POSITIVE', viewValue : 'B+'},
    {value : 'B_NEGETIVE', viewValue : 'B-'},
    {value : 'AB_POSITIVE', viewValue : 'AB+'},
    {value : 'AB_NEGETIVE', viewValue : 'AB-'},
    {value : 'O_POSITIVE', viewValue : 'O+'},
    {value : 'O_NEGETIVE', viewValue : 'O-'},
  ];

  httpService : HttpcommService;

  patientEmailControl = new FormControl('',[
    Validators.email,
    Validators.required
  ]);

  //Accordian expansion bar control
  step: number = 0;
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(public snackBar: MatSnackBar, public httpClient: HttpClient,
    public commonService : CommonService) { 
    this.patient = new Patient();
    this.httpService = new HttpcommService(httpClient);
  }

  ngOnInit() { }

  submitPatient(){
    // this.nextStep();
    // console.log(this.patient)
    // console.log('DOB',this.dobDate.value)  
    this.httpService.addPatient(this.patient).subscribe( resp => {
      if(resp && resp.status == 'SUCCESS'){
          this.commonService.showSuccessSnackBar(this.snackBar)
          this.patient = new Patient()
          this.dashboardTabControl.setValue(0) //Go back to add prescription page
        }else{
          this.commonService.showErrorSnackBar(this.snackBar,resp.desc)
        }
      }
    )
  }
  onKeyUp(event : any){  }
  getSelectedTabChange(event : any){
    console.log(event)
  }
  getFocusChange(event : any){
    console.log(event)
  }
  dateAddEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // console.log(`Date value: ${event.value}`)
    let dob: Date = event.value
    let parsedDate : number[] = this.commonService.getParsedDate(dob);
    if(parsedDate && parsedDate.length == 3){
      this.patient.dobDd = parsedDate[0];
      this.patient.dobMm = parsedDate[1];
      this.patient.dobYy = parsedDate[2];
      this.patient.dobTimestamp = dob.getTime();
    }
  }



}