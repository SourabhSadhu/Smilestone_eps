import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PrescriptionPrintView } from '../models/models';
import { HttpcommService } from '../services/httpcomm.service';
import { CommonService } from '../services/commonservice.service';
import { DummyResponse } from '../services/dummyresponse';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit, AfterViewInit {

    printView: PrescriptionPrintView;
    httpService: HttpcommService;
    commonService: CommonService;
    requestLoading = true;

    constructor(private route: ActivatedRoute, httpClient: HttpClient,
        public matSnackbar: MatSnackBar, public router: Router,
        public dialog: MatDialog) {
        this.httpService = new HttpcommService(httpClient);
        this.commonService = new CommonService();
    }

    ngAfterViewInit() {
        const patientId = +this.route.snapshot.queryParamMap.get('patientId');
        const prescriptionId = +this.route.snapshot.queryParamMap.get('prescriptionId');
        
        if (patientId > 0 && prescriptionId > 0) {
            this.httpService.getPrescriptionPrintView(patientId, prescriptionId).subscribe(resp => {
                this.requestLoading = false
                if (resp && resp.status == 'SUCCESS') {
                    this.printView = resp.resp;
                } else {                    
                    this.commonService.showErrorSnackBar(this.matSnackbar,resp.desc,() =>{
                        this.router.navigate([''])
                    })
                }
            })
        }else{ 
            this.router.navigate([''])            
        }
    }

    ngOnInit() {
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

        var prescriptionContent = document.getElementById("printableContent");
        // if (prescriptionContent.requestFullscreen) {
        //     prescriptionContent.requestFullscreen();
        // }
        // var openWindow = window.open("", "_blank", "fullscreen=yes,width=800,height=600")
        var openWindow = window.open("", "target", "fullscreen=yes")
        var css = this.printStylesheet
        let printablePage =
            `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
        <html lang="en"> 
          <head> 
            <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" /> 
            <title>E - prescription</title>
            ${css}
          </head> 
          <body>
       ${prescriptionContent.innerHTML}
       </body></html>`;
        openWindow.document.open()
        openWindow.document.write(printablePage)
        openWindow.document.close
        openWindow.focus();
        if(!this.httpService.dummy){
            openWindow.print();
            openWindow.close();
        }
    }

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
    
    /* p {
        orphans:3;
        widows:3;
    } */
    
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