import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map,tap, catchError } from 'rxjs/operators';
import { Response,Patient, FeeConfigRequestListView, DashboardView, ClinicalFindingView } from '../models/models';
import { DummyResponse } from './dummyresponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpcommService {

  dummyResp : DummyResponse;
  dummy = true;
  resp : Response;
  baseUrl = 'http://localhost:12000/my-portal/';
  ageGrpUrl = this.baseUrl + 'age-group/get-age-group?age=';
  getPatientUrl = this.baseUrl + 'patient/get-patient';
  addPatientUrl = this.baseUrl + 'patient/add-patient';
  getAllToothQuadrent = this.baseUrl + 'tooth-qdr/get-all';
  getAllTreatmentPlan = this.baseUrl + 'trtmnt/get-plan';
  getAllClinicalFindings = this.baseUrl + 'clinical-finding/get-all';
  getAllMedicalHistory = this.baseUrl + 'medical-history/get-all'
  getAllMedicalHistoryMaster = this.baseUrl + 'medical-history/get-medical-master';
  getMedicineUrl = this.baseUrl + 'medicine/get-medicine';
  getMedicineUrlPart1 = '?trtmntId=';
  getMedicineUrlPart2 = '&age=';
  getFeeConfigUrl = this.baseUrl + 'fee/get-config';
  getFeeConfigAgeGrpPart1Url = '?age=';
  getFeeConfigToothGrpPart2Url = '&tooth_grp_idx=';
  getFeeConfigTrtIdPart3Url = '&trtmnt_id=';
  getFeeConfigListUrl = this.baseUrl + 'fee/get-config-list';
  addDashboardUrl = this.baseUrl + 'dashboard/add-dashboard';
  getDashboard = this.baseUrl + 'dashboard/get-dashboard?patientId=';
  postAddClinicalFindingUrl = this.baseUrl + 'clinical-finding/add-clinical-finding'
  getAddTreatmentPlanUrl = this.baseUrl + 'trtmnt/add-treatment-plan'
  
  constructor(public http : HttpClient) {
    this.dummyResp = new DummyResponse();
  }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Accept' : 'application/json',
      // 'Content-Type' : 'text/plain',
      'Content-Type' : 'application/json',
    })
  };

  parseData(s : object) : any{
    return JSON.parse(JSON.stringify(s));
  }

  getDashboardView(patientId: number): Observable<Response>{
    if(this.dummy){      
      return of(this.parseData(this.dummyResp.getDashboardView));
    }else{
      return this.http.get<Response>(this.baseUrl+'dashboard/get-dashboard?patientId='+patientId, this.httpOptions);
    }
  }

  getAgeGroup(age : string) : Observable<Response>{
    if(this.dummy){      
      return of(this.parseData(this.dummyResp.getAgeGroup));
    }else{
      return this.http.get<Response>(this.ageGrpUrl+age, this.httpOptions);
    }
  }

  getPatient(patient : Patient) : Observable<Response>{
    //console.log('http service called');
    if(this.dummy){
      //console.log(this.parseData(this.dummyResp.getPatient));
      return of(this.parseData(this.dummyResp.getPatient));
    }else{
      //console.log(1.2);
      return this.http.post<Response>(this.getPatientUrl,patient,this.httpOptions)
        .pipe(
          catchError(this.handleError('test', new Response()))
        )
      ;
    }
  }

  addPatient(p : Patient) : Observable<Response>{
    //console.log('Posting patient');
    //console.log(p);
    if(this.dummy){
      //console.log('Dummy post');
      return of(this.parseData(this.dummyResp.getPatient));
    }else{
      //console.log('Real post');
      return this.http.post<Response>(this.addPatientUrl,p,this.httpOptions)
        .pipe(
          catchError(this.handleError('post patient', new Response()))
        );
    }
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getClinicalFindings() : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.clinicalFindingList));
    }else{
      return this.http.get<Response>(this.getAllClinicalFindings,this.httpOptions)
        .pipe(
          catchError(this.handleError('Get Clinicalfindings',new Response()))
        )
    }
  };

  getToothQuadrents() : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.toothQuadrentList));
    }else{
      return this.http.get<Response>(this.getAllToothQuadrent,this.httpOptions)
        .pipe(
          catchError(this.handleError('Get ToothQuadrent',new Response()))
        )
    }
  };

  getMedicalMaster() : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.medicalMaster));
    }else{
      return this.genericGetRequest(this.getAllMedicalHistoryMaster);
    }
  };

  getTreatmentPlan() : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.getTreatmentPlan));
    }else {
      return this.genericGetRequest(this.getAllTreatmentPlan);
    }
  };

  getAllMedicine(): Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.getMedicine));
    }else{
      return this.genericGetRequest(this.baseUrl+'medicine/');
    }
  }

  getMedicineView(url : string) : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.getMedicine));
    }else{
      return this.genericGetRequest(url);
    }
  }

  getFeeConfig(age: number, tooth_grp_idx: number, treatmentId: number){
    if(this.dummy){
      return of(this.parseData(this.dummyResp.getFeeConfig))
    }else{
      let url = this.getFeeConfigUrl + this.getFeeConfigAgeGrpPart1Url + age + this.getFeeConfigToothGrpPart2Url + tooth_grp_idx + this.getFeeConfigTrtIdPart3Url + treatmentId
      return this.genericGetRequest(url)
    }
  }

  getFeeConfigList(age : number, feeReqListView : FeeConfigRequestListView[]) : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.getFeeConfigList))
    }else{
      let url = this.getFeeConfigListUrl + this.getFeeConfigAgeGrpPart1Url + age;
      return this.genericPostRequest(url, feeReqListView);
    }
  }

  addDashBoard(req : DashboardView) : Observable<Response>{
    if(!this.dummy){
      return this.genericPostRequest(this.addDashboardUrl,req,'Add dashboard')
    }else{
      let resp = new Response()
      resp.status = 'SUCCESS'
      resp.resp = req
      return of(resp)
    }
  }

  addClinicalFinding(req: ClinicalFindingView) : Observable<Response>{
    if(this.dummy){
      return of(this.parseData(this.dummyResp.addonClinicalFinding))
    }else{
      return this.genericPostRequest(this.postAddClinicalFindingUrl, req, 'Add cf');
    }
  }

  genericGetRequest(url : string, notation : string = 'http get') : Observable<Response>{
    return this.http.get<Response>(url, this.httpOptions).pipe(catchError(this.handleError(notation, new Response())))
  }

  genericPostRequest(url : string, reqObject : any, notation : string = 'http post') : Observable<Response>{
    console.log('Post', url);
    console.log('Data', reqObject);
    return this.http.post<Response>(url, reqObject, this.httpOptions).pipe(catchError(this.handleError(notation, new Response())))
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
