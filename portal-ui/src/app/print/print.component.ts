import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PrescriptionPrintView } from '../models/models';
import { HttpcommService } from '../services/httpcomm.service';
import { CommonService } from '../services/commonservice.service';
import { HeaderFooter } from './header-footer';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print-medium-site.css', './image.css']
})
export class PrintComponent implements OnInit, AfterViewInit {

    printView = new PrescriptionPrintView();
    httpService: HttpcommService;
    commonService: CommonService;
    requestLoading = true;
    isDummy: boolean;
    date: Date = new Date()
    headerFooter : HeaderFooter;

    constructor(private route: ActivatedRoute, httpClient: HttpClient,
        public matSnackbar: MatSnackBar, public router: Router,
        public dialog: MatDialog) {
        this.httpService = new HttpcommService(httpClient);
        this.isDummy = this.httpService.dummy;
        this.commonService = new CommonService();
        this.headerFooter = new HeaderFooter(this.isDummy)
        console.log(this.isDummy)
    }

    ngOnInit() {
        const patientId = +this.route.snapshot.queryParamMap.get('patientId');
        const prescriptionId = +this.route.snapshot.queryParamMap.get('prescriptionId');

        if (patientId > 0 && prescriptionId > 0) {
            this.httpService.getPrescriptionPrintView(patientId, prescriptionId).subscribe(resp => {
                this.requestLoading = false
                if (resp && resp.status == 'SUCCESS') {
                    this.printView = resp.resp;
                } else {
                    this.commonService.showErrorSnackBar(this.matSnackbar, resp.desc, () => {
                        this.router.navigate([''])
                    })
                }
            })
        } else {
            this.router.navigate([''])
        }
    }

    ngAfterViewInit() {
        /**
         * More details on route and queryparams
         * https://www.tektutorialshub.com/angular/angular-passing-optional-query-parameters-to-route/
         * https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/
         */
    }

    getOrderedAdviceList() {
        return this.commonService.getNewLineSeperatedArrayString(this.printView.advice)
    }

    printPrescription() {
        var prescriptionContent = document.getElementById("printableFullPrescriptionContent");
        this.processPrintProcess(this.headerFooter.header + prescriptionContent.innerHTML + this.headerFooter.footer)
    }
    printRevisit() {
        const dialogRef = this.dialog.open(HeaderFooterConfirmationDialog, {
            width: '350px'
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                var revisit = document.getElementById("printableRevisitPrescriptionContent").innerHTML
                this.processPrintProcess(this.headerFooter.header + revisit + this.headerFooter.footer)
            } else {
                var revisit = document.getElementById("printableRevisitPrescriptionContent").innerHTML
                this.processPrintProcess(revisit, false)
            }
        });

    }

    processPrintProcess(htmlData: string, isAsync: boolean = true) {
        // var openWindow = window.open("http://localhost:4200/print?patientId=1&prescriptionId=34", "_blank", "fullscreen=yes")
        var openWindow = window.open("http://localhost:4200/print?patientId=1&prescriptionId=34", "_blank",'height='+screen.height+', width='+screen.width)
        var css = this.printMediumCss
        let printablePage =
            `<!DOCTYPE html"> 
            <html lang="en"> 
                <head> 
                    <title>E - prescription</title>
                    ${css}
                </head> 
                <body>
                    ${htmlData}
                </body>
            </html>`;
        openWindow.document.open()
        openWindow.document.write(printablePage)
        
        //Async flag to set timeout for loading image
        if(isAsync){
            setTimeout(() => {
                openWindow.document.close
                openWindow.focus();
                openWindow.print();
                // openWindow.close();
            }, 2 * 1000)
        }else{            
            openWindow.document.close
            openWindow.focus();
            openWindow.print();
            openWindow.close();            
        }
        
    }



    printMediumCss: string = `
    <style>
    .page-header, .page-header-space {
        /* height: 100px; */
        /* Changing height as per requirement */
        height: 180px;
      }
      
      .page-footer, .page-footer-space {
        height: 100px;
      }
        
      .page-footer {
        position: fixed;
        bottom: 0;
        width: 100%;        
      }
        
      .page-header {
        position: fixed;
        top: 0mm;
        width: 100%;
      }
        
      .page {
        page-break-after: always;
      }
        
      @page {
        margin: 20mm
      }
        
      @media print {
        thead {display: table-header-group;} 
        tfoot {display: table-footer-group;}          
        button, .noprint{display: none;}          
        body {margin: 0;}
        div, table, ul, ol {page-break-inside: always;}        
      }
      
      /* Custom entries */
      .fab {
        position: fixed;
        bottom: 150px;
        right: 30px;
      }
      .left {
        text-align: left;    
      }
      .center {
          text-align: center;
      }
      .right {
          text-align: right;
          padding-right: 1em;
      }
      .smaller-border{
          border-top: 1.5px solid blue;
        //   min-width: 100%;
          width: 100%;
      }
      .smaller-border-footer{
        border-top: 1.5px solid blue;
      }
      p.header {
        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 35px;
        margin-bottom: 0px;
      }
      p.footer {
        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 25px;
        margin-bottom: 0px;
      }
      
      p.sub-header{
        /* font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
        font-size: 15px;
        margin: 9px;
      }
      .light-green-letterhead{
        color : #6ab689
      }
      .deep-green-letterhead{
        color : #6da945
      }
      .block1,.block2{
        display: inline;
      }
      p,div,td { 
        text-indent:   1em;
        margin-top:    .5em;
        margin-bottom: .5em;
        line-height: 1;
      }
      </style>
    `
    printStylesheet: string = `
    <style>
    /*  ------ Global settings */

    * {
        font-family: Cambria, Georgia, serif;
        /* background-color: #ffffe0; */
        }
    
    body {
        text-align:justify;
        counter-reset: chapter;
        }
        
    /* ------- Pagination */
    
    h1, h2 {
      page-break-after: avoid;
      /* page-break-before: always; */
    }
    
    p.header {
        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 25px;
        /*display:inline-block;
        -webkit-transform:scale(2,1); * Safari and Chrome *
        -moz-transform:scale(2,1); * Firefox *
        -ms-transform:scale(2,1); * IE 9 *
        -o-transform:scale(2,1); Opera 
        transform:scale(2,1); */
        -webkit-transform:scale(2,1);
        transform:scale(2,1);
      }
    
    p.sub-header{
        font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 15px;
    }
    .font30{
        font-size: 30px
    }
    @media screen {
        div.footer {
          display: none;
        }
      }
    @media print {
        div.footer {
          position: relative;
          bottom: 0;
        }
        div, table, ul, ol {
            page-break-inside: avoid;
        }
      }
    .light-green-letterhead{
        color : #6ab689
    }
    .deep-green-letterhead{
        color : #6da945
    }
    
    /* Default left, right, top, bottom margin is 2cm */
    @page { margin: 1cm } 
    
    /* First page, 10 cm margin on top */
    @page :first {
    /* margin-top: 10cm  */
    }
    
    /* Left pages, a wider margin on the left */
    /* @page :left {
    margin-left: 3cm;
    margin-right: 2cm;
    }
    
    @page :right {
    margin-left: 2cm;
    margin-right: 3cm;
    } */
    
    /* ------ Normal elements */
        
     p,div,td { 
        text-indent:   1em;
        margin-top:    .5em;
        margin-bottom: .5em;
        line-height: 1.5;
        }
        
    /* First paragraphs after a title  */
        
    h2+p {
        text-indent: 0em;
        }
        
    h2+p:first-letter {
        font-size: 200%;
        color: blue;
        font-family: "Goudy Old Style", Georgia, serif;
        line-height: 50%;
        }
    
    h1,h2,h4,h5,h6 { 
        text-align: center; 
        letter-spacing: 0.1em;
        }
        
     h1 {
        /* margin-top: 3cm; */
        color: red;
        }
        
     h2 {
        border-top: 5px solid blue;
        border-bottom: 1px solid blue;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 2cm;
        counter-increment: chapter;
        }
        
     h2:before {
        content: "Chapter " counter(chapter) ": ";
        }
    
     hr { 
        width: 50%;
        text-align: center;
        }
    
    strong { 
        background-color: yellow;
        font-style: normal;
    }
        
    blockquote {
        font-size: 90%; 
        margin-left: 20%; 
        margin-right: 20%;
        }
        
    .toc  {
        text-align:center;
        margin-top: 2cm;
        margin-bottom: 2cm;
        }
        
    .toc p:first-letter {font-size: 100%;}
        
    pre { 
        font-family: "Comic Sans", fantasy, serif;
        font-style: italic; 
        margin-left: 20%;
        }
        
    p.fineprint {
        font-size: 70%;
        text-indent: 0em;
        }
        
    pre.copyright, .noprint {
       display:none;
    }
    
    p.heading {
        font-size: x-large;
        text-align: center; 
        }
    
    
    /* Custom entry */
    .left {
        text-align: left;    
    }
    .center {
        text-align: center;
    }
    .right {
        text-align: right;
    }
    .border{
        border-top: 3px solid blue;
    }
    .smaller-border{
        border-top: 1.5px solid blue;
    }
    table,tr{
        width:100%;
    }
    .block1,.block2{
        display: inline;
    }
    </style>
    `
    customTreatmentPlan = ''
    editTreatmentPlan(){
        const dialogRef = this.dialog.open(CustomTreatmentPlanDialog, {
            width: '250px',
            data: this.customTreatmentPlan
          });
      
          dialogRef.afterClosed().subscribe(result => {
            this.customTreatmentPlan = result;
          });
    }
}

// @Component({
//     selector: 'doctor-selection-dialog',
//     templateUrl: 'doctor-selection-dialog.html',
//     styleUrls: ['./print.component.css'],
// })
// export class DoctorSelectionDialog {
//     regdNo: string
//     constructor(
//         public dialogRef: MatDialogRef<DoctorSelectionDialog>,
//         @Inject(MAT_DIALOG_DATA) public customData: string = "") {
//     }
//     closeDialog() {
//         this.dialogRef.close(this.regdNo)
//     }
//     onNoClick(): void {
//         this.dialogRef.close();
//     };
// }

@Component({
    selector: 'header-footer-confirmation',
    templateUrl: 'header-footer-confirmation.html',
})
export class HeaderFooterConfirmationDialog {

    constructor(
        public dialogRef: MatDialogRef<HeaderFooterConfirmationDialog>) { }

    onNoClick(): void {
        this.dialogRef.close(false);
    }

    onPositiveClick(): void {
        this.dialogRef.close(true);
    }

}

@Component({
    selector: 'custom-treatment-plan-selector',
    template: `<h1 mat-dialog-title>Edit Treament details</h1>
    <div mat-dialog-content>
        <mat-form-field>
            <textarea matInput placeholder="Treatment details" cdkTextareaAutosize cdkAutosizeMinRows="1"
                cdkAutosizeMaxRows="5" [(ngModel)]="data"></textarea>
        </mat-form-field>
    </div>
    <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Cancel</button>
        <button mat-button [mat-dialog-close]="data" color="primary">Ok</button>
    </div>`
})
export class CustomTreatmentPlanDialog{
    constructor(public dialogRef : MatDialogRef<CustomTreatmentPlanDialog>,
        @Inject(MAT_DIALOG_DATA) public data: string){
    }

    onNoClick() : void{
        this.dialogRef.close();
    }
}