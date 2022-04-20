import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipService {
  private subject = new Subject<any>();

  private bill: number = 0;
  private people: number = 0;
  private tip: number = 0;

  private tipAmount: number = 0;
  private total: number = 0;

  constructor() {}

  update(name: any, value: any): void {
    console.log('update');
  }

  getValues(): Observable<any> {
    return this.subject.asObservable();
  }
}
