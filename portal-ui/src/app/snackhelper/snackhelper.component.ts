import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';
import { SnackbarModel } from './snackbar-model'

@Component({
  selector: 'app-snackhelper',
  templateUrl: './snackhelper.component.html',
  styleUrls: ['./snackhelper.component.css']
})
export class SnackhelperComponent implements OnInit {

  // snackBarRef: MatSnackBarRef<SimpleSnackBar>
  // snackBarOnDismissal: () => void
  // snackBarOnAction: () => void

  //public snackBar: MatSnackBar,

  isError: Boolean = false
  msg: string = ''
  action: string
  
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarModel) {
    this.isError = data.isError;
    this.action = data.action;
    if (data.msg && data.msg.length > 0) {
      this.msg = data.msg;
    }
  }
  ngOnInit() { }

  actionCallback(){
    this.data.callback();
  }
  // open(msg: string, action?: string) {

  //   this.snackBarRef = this.snackBar.open(msg, action, {
  //     duration: 4000,
  //     direction: "ltr",
  //     data: 'Sample data'
  //   });

  //   this.snackBarRef.afterDismissed().subscribe(() => {
  //     this.snackBarOnDismissal();
  //   });

  //   this.snackBarRef.onAction().subscribe(() => {
  //     this.snackBarOnAction();
  //   });
  // }
}