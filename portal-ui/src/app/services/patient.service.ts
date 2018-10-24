import { Injectable } from '@angular/core';
import { Patient } from '../models/models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpcommService } from './httpcomm.service';
import { SnackhelperComponent } from '../snackhelper/snackhelper.component';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient : Patient;
  com : HttpcommService;

  constructor(httpClient : HttpClient, public snackbar : MatSnackBar) {    
    console.log('Patient service constructor');
    this.com = new HttpcommService(httpClient);
    this.showError();
  }

   setPatient(patient : Patient){
     this.patient = patient;
   }

  //  getRealPatient(patient : Patient) : Observable<Patient[]> {
  //   console.log('Patient Service called');
  //   let c : Patient[];
  //   let response = this.com.getPatient(patient).subscribe(
  //     resp =>{
  //       if(resp.status === 'SUCCESS'){
  //         c = resp.resp;
  //       }else{          

  //       }
  //     }
  //    );
  //   return of(c);
  //  }

  //  addPatient(p : Patient) : Observable<Patient[]>{
  //   console.log('Patient Service called');
  //   console.log('Sending from patient service');
  //   console.log(p);
  //   let c : Patient[];
  //   let response = this.com.addPatient(p).subscribe(
  //     resp =>{
  //       if(resp.status === 'SUCCESS'){
  //         c = resp.resp;
  //       }else{          

  //       }
  //     }
  //    );
  //   return of(c);
  //  }

   extractData(s : string) : string{
      console.log(`Actual string ${s}`);
      console.log(JSON.parse(JSON.stringify(s)));
      return s;
   }

   showError(){
     this.snackbar.openFromComponent(SnackhelperComponent,{
       duration : 2000,
     })
   }

}