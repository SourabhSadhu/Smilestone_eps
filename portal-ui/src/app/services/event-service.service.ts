import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }
  private subject = new Subject<any>();

  sendEvent(dataLoaded: boolean) {
    this.subject.next({ flag: dataLoaded });
  }

  clearEvent() {
    this.subject.next();
  }

  getEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
