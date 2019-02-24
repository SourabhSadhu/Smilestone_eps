import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-medium-site',
  templateUrl: './print-medium-site.component.html',
  styleUrls: ['./print-medium-site.component.css']
})
export class PrintMediumSiteComponent implements OnInit {

  printCss = `
  .page-header, .page-header-space {
    height: 100px;
  }
  
  .page-footer, .page-footer-space {
    height: 50px;
  
  }
  
  .page-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid black; /* for demo */
    background: yellow; /* for demo */
  }
  
  .page-header {
    position: fixed;
    top: 0mm;
    width: 100%;
    border-bottom: 1px solid black; /* for demo */
    background: yellow; /* for demo */
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
     
     button {display: none;}
     
     body {margin: 0;}
  }
  `;
  constructor() { }

  ngOnInit() {
  }

  print() {
    var openWindow = window.open("", "target", "fullscreen=yes")
    var css = this.printCss
    var htmlData = document.getElementById("printContent").innerHTML;
    let printablePage =
      `<!DOCTYPE html> 
        <html lang="en"> 
          <head>
            <title>Ultimate Print Medium</title>
            <style>
              ${css}
            </style>
          </head> 
          <body>
       ${htmlData}
       </body></html>`;
    openWindow.document.open()
    openWindow.document.write(printablePage)
    // openWindow.document.close
    openWindow.focus();
    // openWindow.print();
  }
}
