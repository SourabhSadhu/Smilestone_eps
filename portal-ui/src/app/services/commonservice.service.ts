import { Injectable } from '@angular/core';

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
    console.log('Date validation: '+ this.validateDate(date));
    if (this.validateDate(date)) {
      pd = [];
      pd.push(date.getDate());
      pd.push(date.getMonth() + 1 );
      pd.push(date.getFullYear());
    }
    return pd;
  }
}
