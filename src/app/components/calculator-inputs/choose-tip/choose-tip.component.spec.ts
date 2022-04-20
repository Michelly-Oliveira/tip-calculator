import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTipComponent } from './choose-tip.component';

describe('ChooseTipComponent', () => {
  let component: ChooseTipComponent;
  let fixture: ComponentFixture<ChooseTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
