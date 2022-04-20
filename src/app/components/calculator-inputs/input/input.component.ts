import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  value!: number;

  constructor() {}

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
      name: this.info,
      value: this.value,
    });

    this.hasError = false;
  }
}
