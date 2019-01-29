import { Component,ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { DashRoutingModule } from './dash-routing.module'

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
    {"name": "Admin", "path":"admin"},
    {"name": "Test", "path":"test"},
    {"name": "SortTable", "path":"sortTable"},
    // {"name": "Print", "path":"print?patientId=1&prescriptionId=12"}
  ]
  constructor(){
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
