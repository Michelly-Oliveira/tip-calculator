import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-calculator-inputs',
  templateUrl: './calculator-inputs.component.html',
  styleUrls: ['./calculator-inputs.component.css'],
})
export class CalculatorInputsComponent implements OnInit {
  subscription!: Subscription;

  constructor(private tipService: TipService) {
    this.subscription = this.tipService.getValues().subscribe();
  }

  ngOnInit(): void {}

  changeInputValue(values: any): void {
    console.log('here', values);
    const { name, value } = values;
    this.tipService.update(name, value);
  }
}
