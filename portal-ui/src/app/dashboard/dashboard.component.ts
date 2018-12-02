import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient, BloodGroup } from '../models/models';
import { MatSnackBar } from '@angular/material';
import { SnackhelperComponent } from '../snackhelper/snackhelper.component';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {FormControl, Validators} from '@angular/forms';
import { HttpcommService } from '../services/httpcomm.service'
import { CommonService } from '../services/commonservice.service';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SnackbarModel } from '../snackhelper/snackbar-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patient : Patient;
  commonService = new CommonService();
  
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

  
  constructor(public snackBar: MatSnackBar, public httpClient: HttpClient) { 
    this.patient = new Patient();
    this.httpService = new HttpcommService(httpClient);
  }

  ngOnInit() {          
    this.getRealPatient();
  }

  getRealPatient(){

    this.httpService.getPatient(this.patient).subscribe(
      resp => {
        if(resp && resp.status === 'SUCCESS'){
          if(resp.resp && resp.resp.length > 0){
            this.patient = resp.resp[0];
            this.firstName = this.patient.firstName;
            this.lastName = this.patient.lastName;
          }else{

          }
        }else{
          
        }
      }
    )
  }
  submitPatient(){
    this.nextStep();
    console.log('Sending from dash');
    console.log(this.patient);
    this.httpService.addPatient(this.patient).subscribe(
      s => {
        console.log('Receieved response');
        console.log('s');
      }
    )
  }
  onKeyUp(event : any){
    let snackbarConfig = new SnackbarModel();
    snackbarConfig.isError = true
    snackbarConfig.msg = 'test msg' 
    snackbarConfig.duration = 2000
    snackbarConfig.callback = () => {
      console.log('Callback ok')
    }
    this.commonService.showSnackBar(this.snackBar, snackbarConfig)
  }

  dateAddEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    
    let parsedDate : number[] = this.commonService.getParsedDate(event.value);
    if(parsedDate && parsedDate.length == 3){
      this.patient.dobDd = parsedDate[0];
      this.patient.dobMm = parsedDate[1];
      this.patient.dobYy = parsedDate[2];
    }
  }



}