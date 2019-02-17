import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { DashRoutingModule } from './/dash-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SnackhelperComponent } from './snackhelper/snackhelper.component';
import { CreatePrescriptionComponent } from './create-prescription/create-prescription.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import { DialogToothClinicalfindings, CustomFeeInsertionDialog } from './create-prescription/create-prescription.component';
import { MedicineInsertionDialog } from './create-prescription/medicine-dialog/medicine-insertion-dialog-component'
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { PrintComponent } from './print/print.component';
import { MatSortTableComponent } from './mat-sort-table/mat-sort-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    SnackhelperComponent,
    CreatePrescriptionComponent,
    MaterialTestComponent,
    DialogToothClinicalfindings,
    CustomFeeInsertionDialog,
    MedicineInsertionDialog,
    TreatmentPlanComponent,
    PrintComponent,
    MatSortTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    DashRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackhelperComponent,DialogToothClinicalfindings,CustomFeeInsertionDialog,MedicineInsertionDialog]
})
export class AppModule { }
