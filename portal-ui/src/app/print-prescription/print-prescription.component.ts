import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-prescription',
  templateUrl: './print-prescription.component.html',
  styleUrls: [
    './print-prescription.component.css'
  ]
})
export class PrintPrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {    
    this.printPrescription()
  }

  printPrescription() {
    var prescriptionContent = document.getElementById("printableContent").innerHTML;
    var openWindow = window.open("", "_blank", "width=auto, height=100%")
    let printablePage =
      `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> 
        <html lang="en"> 
          <head> 
            <meta http-equiv="Content-Type" content="text/html; charset=us-ascii" /> 
            <title>Just So Stories, by Rudyard Kipling</title>  
            <style>
            /*  ------ Global settings */

            * {
                font-family: Cambria, Georgia, serif;
                background-color: #ffffe0;
                }
            
            body {
                text-align:justify;
                counter-reset: chapter;
                }
                
            /* ------- Pagination */
            
            h1, h2 {
              page-break-after: avoid;
              page-break-before: always;
            }
            
            p {
                orphans:3;
                widows:3;
            }
            
            /* Default left, right, top, bottom margin is 2cm */
            @page { margin: 2cm } 
            
            /* First page, 10 cm margin on top */
            @page :first {
            margin-top: 10cm 
            }
            
            /* Left pages, a wider margin on the left */
            @page :left {
            margin-left: 3cm;
            margin-right: 2cm;
            }
            
            @page :right {
            margin-left: 2cm;
            margin-right: 3cm;
            }
            
            /* ------ Normal elements */
                
             p { 
                text-indent:   1.5em;
                margin-top:    .75em;
                margin-bottom: .75em;
                line-height: 1.3;
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
            
            h1,h2,h3,h4,h5,h6 { 
                text-align: center; 
                letter-spacing: 0.1em;
                }
            
             h1 {
                margin-top: 3cm;
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
                
            /*  ------ Special sections, using CSS class identifiers */
                
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
            
            </style>
          </head> 
          <body>
       ${prescriptionContent}
       </body></html>`;
    // console.log("printPrescription", JSON.stringify(printablePage))
    openWindow.document.open()
    openWindow.document.write(printablePage)
    openWindow.document.close
    openWindow.focus();
    openWindow.print();
    // openWindow.close();
  }
}
