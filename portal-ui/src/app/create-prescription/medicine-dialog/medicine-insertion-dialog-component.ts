import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators'
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MedicineHistoryView, MedicineView, MedicineMultiSelection } from '../../models/models';
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * @Input MedicineView List
 * @Output MedicineHistoryView object without patientId and prescriptionId
 */
@Component({
  selector: 'medicine-insert',
  templateUrl: 'medicine-insert.html',
  styleUrls: ['../create-prescription.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MedicineInsertionDialog {

  medicineNameListObservable: Observable<string[]>;
  medicineNameList: MedicineMultiSelection[];
  dataSource = new MatTableDataSource<MedicineMultiSelection>();
  columnsToDisplay: string[] = ['name', 'selected'];
  expandedElement: MedicineMultiSelection | null;
  medicineForm = new FormControl();
  repetition = '';
  period = '';
  result = '';
  checkMedicineStatement = false;

  constructor(
    public dialogRef: MatDialogRef<MedicineInsertionDialog>,
    @Inject(MAT_DIALOG_DATA) public medicineList: MedicineView[]) {
    if (medicineList && medicineList.length > 0) {
      this.medicineNameList = [];
      medicineList.forEach(meds => {
        let medicineSelectionModel = new MedicineMultiSelection()
        medicineSelectionModel.medicineName = meds.medicineName
        medicineSelectionModel.selected = false;
        this.medicineNameList.push(medicineSelectionModel);
      })
      this.dataSource.data = this.medicineNameList;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  };

  closeDialog() {

    if (this.medicineForm && this.medicineForm.value) {
      let medicineHistoryView = new MedicineHistoryView()
      medicineHistoryView.medicineName = this.medicineForm.value
      medicineHistoryView.dosage = this.repetition + ' ' + this.period + ' days'

      // let medicineIndex = this.medicineNameList.indexOf(medicineHistoryView.medicineName);
      // if (medicineIndex && this.medicineList.length > medicineIndex) {
      //   medicineHistoryView.medId = this.medicineList[medicineIndex].medicineId
      // }
      this.dialogRef.close(medicineHistoryView)
    }
  }

  // private _filter(value: string): string[] {
  //   return this.medicineNameList.filter(desc => desc.toLowerCase().includes(value.toLowerCase()));
  // }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChange(event, index: number) {
    console.log("Index",index);
    console.log("Event",event);
  }
}
