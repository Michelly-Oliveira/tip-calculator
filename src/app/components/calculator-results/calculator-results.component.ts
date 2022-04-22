import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrls: ['./calculator-results.component.css'],
})
export class CalculatorResultsComponent implements OnInit {
  subscription!: Subscription;

  tip: string = '$0.00';
  total: string = '$0.00';

  constructor(private tipService: TipService) {
    this.subscription = this.tipService.getValues().subscribe((values) => {
      const { tip, total } = values;

      this.tip = tip.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      this.total = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    });
  }

  ngOnInit(): void {}

  onReset() {
    this.tipService.reset();
  }
}
