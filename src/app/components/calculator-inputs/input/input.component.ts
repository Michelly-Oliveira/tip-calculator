import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { TipService } from '../../../services/tip.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() info!: string;
  @Input() title!: string;
  @Input() iconName!: string;
  @Output() onInputChange = new EventEmitter<any>();

  icon!: string;
  hasError: boolean = false;
  value!: number | undefined;

  subscription!: Subscription;

  constructor(private tipService: TipService) {
    this.subscription = this.tipService.getValues().subscribe((values) => {
      if (!values[this.info]) {
        this.value = undefined;
      }
    });
  }

  ngOnInit(): void {
    this.icon =
      this.iconName === 'money'
        ? '../../../../assets/icon-dollar.svg'
        : '../../../../assets/icon-person.svg';
  }

  updateInputValue() {
    if (this.value === 0 || !this.value) {
      this.hasError = true;
      return;
    }

    this.onInputChange.emit({
      [this.info]: this.value,
    });

    this.hasError = false;
  }
}
