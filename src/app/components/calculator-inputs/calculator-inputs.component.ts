import { Component, OnInit } from '@angular/core';

import { TipInfo, TipService } from '../../services/tip.service';

@Component({
  selector: 'app-calculator-inputs',
  templateUrl: './calculator-inputs.component.html',
  styleUrls: ['./calculator-inputs.component.css'],
})
export class CalculatorInputsComponent implements OnInit {
  constructor(private tipService: TipService) {}

  ngOnInit(): void {}

  changeInputValue(values: TipInfo): void {
    this.tipService.update(values);
  }

  changeTipPercentage(value: number): void {
    this.tipService.update({ tipPercentage: value });
  }

  calculateTip() {
    this.tipService.calculateTip();
  }
}
