
export class HeaderFooter{
    constructor(public isDummy: boolean){

    }

    public getHeaderImage() : string{
        if(this.isDummy){
            return `<img src="http://localhost:4200/prescription-header-print.png" alt="E Prescription"
                    height="150px" width="150px">`
        }else{
            return `<img src="../img/prescription-header-print.png" alt="E Prescription" height="150px"
                    width="150px">`
        }
    }
    public header = `
    <div class="page-header">
        <table>
            <tr>                
                <td style="text-indent: 5em">
                    <div>
                        ${this.getHeaderImage()}
                    </div>
                </td>
                <td class="center">
                    <p class="header deep-green-letterhead">SMILESTONE DENTAL CARE</p>
                    <p class="sub-header light-green-letterhead">KAJIALPARA BUS STOP, RAJARHAT,
                        KOLKATA-700135
                    </p>
                    <p class="sub-header deep-green-letterhead">TIMINGS: </p>
                    <p class="sub-header deep-green-letterhead">MORNING: 10 AM TO 1 PM </p>
                    <p class="sub-header deep-green-letterhead">EVENING: 5.30 PM TO 8.30 PM </p>
                    <p class="sub-header deep-green-letterhead">SUNDAY EVENING & MONDAY FULL DAY CLOSED</p>
                </td>                
            </tr>
        </table>
        <table style="width: 100%;">
            <tr style="min-width:100%; width:100%;">
                <td class="smaller-border" style="min-width:50%; width:50%;" ></td>
                <td class="smaller-border" style="min-width:50%; width:50%;" ></td>
            </tr>
        </table>
    </div>
    <table style="min-width:100%;width:100%">
        <thead>
            <tr>
                <td>
                    <!--place holder for the fixed-position header-->
                    <div class="page-header-space"></div>
                </td>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>
    `;
    public footer = `
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>
                <!--place holder for the fixed-position footer-->
                <div class="page-footer-space"></div>
            </td>
        </tr>
    </tfoot>
    </table>
    
    <table class="page-footer">
        <tr>
            <td class="smaller-border" style="max-width:50%; width:50%;" ></td>
            <td class="smaller-border" style="max-width:50%; width:50%;" ></td>
        </tr>
        <tr>
            <td class="left">
                <p class="block1 footer deep-green-letterhead"><b>Dr. Mitrasen Manna</b></p>
            </td>
            <td class="right">
                <p class="block1 footer deep-green-letterhead"><b>Dr. Aparna Gupta</b></p>
            </td>
        </tr>
        <tr>
            <td class="light-green-letterhead">Regd No: 3350A</td>
            <td class="right light-green-letterhead">Regd No: 5883-A</td>
        </tr>
        <tr>
            <td class="light-green-letterhead">
                Ex-House Surgeon, R. G. Kar Medical College & Hospital
            </td>
            <td class="right light-green-letterhead">
                Ex-House Surgeon, GTB Hospital New Delhi
            </td>
        </tr>
        <tr>
            <td class="light-green-letterhead">
                Ex- Resident, Dr.R.Ahmed Dental College & Hospital
            </td>
            <td class="right light-green-letterhead">
                Ex-Resident, Dr. R. Ahmed Dental College & Hospital
            </td>
        </tr>
        <tr>
            <td class="right deep-green-letterhead">CONTACT NO.:</td>
            <td class="left deep-green-letterhead">7044074579, 8697969918</td>
        </tr>
    </table>
    `;
}