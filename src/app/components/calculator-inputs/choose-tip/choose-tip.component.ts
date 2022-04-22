import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { TipService } from '../../../services/tip.service';

@Component({
  selector: 'app-choose-tip',
  templateUrl: './choose-tip.component.html',
  styleUrls: ['./choose-tip.component.css'],
})
export class ChooseTipComponent implements OnInit {
  tips: Array<number> = [5, 10, 15, 25, 50];
  tipValue!: number | undefined;
  tipValueCustom!: number | undefined;

  @Output() onChangeTipValue: EventEmitter<any> = new EventEmitter();

  subscription!: Subscription;

  constructor(private tipService: TipService) {
    this.subscription = this.tipService.getValues().subscribe((values) => {
      if (!values.tipPercentage) {
        this.tipValue = undefined;
        this.tipValueCustom = undefined;
      }
    });
  }

  ngOnInit(): void {}

  onItemChange(tip: number): void {
    this.tipValue = tip;
    this.onChangeTipValue.emit(this.tipValue);
  }

  unselectTipOptions() {
    this.tipValue = 0;
  }

  updateInputValue(): void {
    const emptyTipValue = 0;
    this.onChangeTipValue.emit(this.tipValueCustom || emptyTipValue);
  }
}
