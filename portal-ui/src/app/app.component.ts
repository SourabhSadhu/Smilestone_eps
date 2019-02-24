import { Component,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { DashRoutingModule } from './dash-routing.module'
import { HttpcommService } from './services/httpcomm.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  title :string = 'eps-dashboard';
  reason :string = '';
  navMenus = [
    {"name": "Dashboard", "path":"dashboard"},
    {"name": "Admin", "path":"admin"}
  ]
  constructor(private httpClient: HttpClient){
    let httpDummyService = new HttpcommService(httpClient);
    if(httpDummyService.dummy){
      this.navMenus.push(
        {"name": "Test", "path":"test"},
        {"name": "SortTable", "path":"sortTable"},
        {"name": "Print", "path":"print?patientId=1&prescriptionId=12"},
        {"name": "Ultimate Print", "path" : "print-medium-site"}
      )
    }
  }
  
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
