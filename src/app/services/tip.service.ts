import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface TipInfo {
  [key: string]: number;
}

interface CalculateTipInfo {
  bill: number;
  people: number;
  tipPercentage: number;
}

@Injectable({
  providedIn: 'root',
})
export class TipService {
  private subject = new Subject<any>();

  private calculateTipInfo: CalculateTipInfo = {
    bill: 0,
    people: 0,
    tipPercentage: 0,
  };

  private tipAmountPerPerson: number = 0;
  private totalPerPerson: number = 0;

  constructor() {}

  update(tipInfo: TipInfo): void {
    Object.assign(this.calculateTipInfo, tipInfo);
    this.calculateTip();
  }

  calculateTip() {
    const { bill, people, tipPercentage } = this.calculateTipInfo;

    if (!people) {
      return;
    }

    const tipAmount = (bill * tipPercentage) / 100;
    const totalWithTip = bill + tipAmount;

    this.tipAmountPerPerson = tipAmount / people;
    this.totalPerPerson = totalWithTip / people;

    this.sendProps();
  }

  reset() {
    this.calculateTipInfo = {
      bill: 0,
      people: 0,
      tipPercentage: 0,
    };

    this.tipAmountPerPerson = 0;
    this.totalPerPerson = 0;

    this.sendProps();
  }

  sendProps() {
    this.subject.next({
      ...this.calculateTipInfo,
      tip: this.tipAmountPerPerson,
      total: this.totalPerPerson,
    });
  }

  getValues(): Observable<any> {
    return this.subject.asObservable();
  }
}
