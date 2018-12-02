import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackbarModel } from '../snackhelper/snackbar-model';
import { SnackhelperComponent } from '../snackhelper/snackhelper.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  message: string[];
  constructor() {
    this.message = [];
  }

  hasValue(s: string): boolean {
    if (s) {
      if (s.length > 0) {
        return true;
      }
    }
    return false;
  }

  addMessage(msg: string) {
    this.message.push(msg);
  }

  getMessages(): string[] {
    return this.message;
  }

  validateDate(date: Date): boolean {
    if (date &&
      date.getDate() && date.getDate() > 0 &&
      date.getMonth() && date.getMonth() >= 0 &&
      date.getFullYear() && date.getFullYear() > 0) return true;
    return false;
  }

  getParsedDate(date: Date): number[] {
    let pd: number[] = null;
    // console.log('Date validation: ' + this.validateDate(date));
    if (this.validateDate(date)) {
      pd = [];
      pd.push(date.getDate());
      pd.push(date.getMonth() + 1);
      pd.push(date.getFullYear());
    }
    return pd;
  }

  combineValForStringArray(stringArr: string[], key: string, addVal: string,
    keyValueSeperator: string = ' - ', valueSeperator: string = ','): string {

    let combinedVal: string = ''
    for (let index = 0; index <= stringArr.length - 1; index++) {
      if (stringArr[index].includes(key)) {
        let insertedVal = stringArr.splice(index, 1)[0]
        if(insertedVal.includes(addVal)){
          return insertedVal
        }else{
          combinedVal = this.getSortedValues(insertedVal + valueSeperator + addVal , keyValueSeperator, valueSeperator)
          // console.log('Return', combinedVal)
          return combinedVal
        }
      }
    }
    // console.log('Return', key + keyValueSeperator + addVal)
    return key + keyValueSeperator + addVal
  }

  getSortedValues(values: string, keyValueSeperator: string, valueSeperator: string, isAsync: Boolean = true): string{

    let keyValueArray : string[] = values.split(keyValueSeperator)
    if(keyValueArray && keyValueArray.length == 2){
      let key = keyValueArray[0]
      let valueStringArray: string[] = keyValueArray[1].split(valueSeperator)
      let valueNumberArray : number[] = []
      valueStringArray.map(vs => {
        valueNumberArray.push(Number(vs))
      })
      let sortedNumberArray : number[] = valueNumberArray.sort((n1, n2) => {
        if(isAsync && n1 > n2) return 1
        else return -1
      })
      return key + keyValueSeperator + sortedNumberArray
    }else return values
  }

  showSnackBar(snackBar: MatSnackBar, snackBarModel: SnackbarModel){
    snackBar.openFromComponent(SnackhelperComponent, {
      data: snackBarModel, duration : snackBarModel.duration
    })
  }
}
