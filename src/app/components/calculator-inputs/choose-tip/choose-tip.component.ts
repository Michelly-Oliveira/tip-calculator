import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-tip',
  templateUrl: './choose-tip.component.html',
  styleUrls: ['./choose-tip.component.css'],
})
export class ChooseTipComponent implements OnInit {
  tips: Array<number> = [5, 10, 15, 25, 50];
  tip!: number;

  constructor() {}

  ngOnInit(): void {}
}
