import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith,map } from 'rxjs/operators'
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MedicineHistoryView, MedicineView } from '../../models/models';

/**
 * @Input MedicineView List
 * @Output MedicineHistoryView object without patientId and prescriptionId
 */
@Component({
    selector: 'medicine-insert',
    templateUrl: 'medicine-insert.html',
    styleUrls: ['../create-prescription.component.css'],
  })
  export class MedicineInsertionDialog {
  
    medicineNameListObservable: Observable<string[]>;
    medicineNameList: string[];
    medicineForm = new FormControl();
    repetition = ''
    period = ''
    result = ''
  
    constructor(
      public dialogRef: MatDialogRef<MedicineInsertionDialog>,
      @Inject(MAT_DIALOG_DATA) public medicineList: MedicineView[]) {
      if (medicineList && medicineList.length > 0) {
        this.medicineNameList = [];
        medicineList.forEach(meds => {
          this.medicineNameList.push(meds.medicineName);
        })
      }
    }
  
    ngOnInit() {
      this.startMedicineFilter();
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    };
  
    generatePreview(){
      this.result = this.medicineForm.value + ' ' + this.repetition + ' ' + this.period + ' days'
    }
  
    closeDialog() {
      
      if(this.medicineForm && this.medicineForm.value){
        let medicineHistoryView = new MedicineHistoryView()
        medicineHistoryView.medicineName = this.medicineForm.value
        medicineHistoryView.dosage = this.repetition + ' ' + this.period + ' days'
        
        let medicineIndex = this.medicineNameList.indexOf(medicineHistoryView.medicineName);
        if(medicineIndex && this.medicineList.length > medicineIndex){
          medicineHistoryView.medId = this.medicineList[medicineIndex].medicineId
        }
        this.dialogRef.close(medicineHistoryView)
      }
    }
  
    startMedicineFilter() {
      this.medicineNameListObservable = this.medicineForm.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  
    private _filter(value: string): string[] {
      return this.medicineNameList.filter(desc => desc.toLowerCase().includes(value.toLowerCase()));
    }
  }