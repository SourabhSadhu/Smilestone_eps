import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin/admin.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { PrintPrescriptionComponent } from './print-prescription/print-prescription.component';
import { PrintComponent } from './print/print.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'test', component: MaterialTestComponent },
  { path: 'printTest', component: PrintPrescriptionComponent },
  { path: 'print', component: PrintComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DashRoutingModule {
}
