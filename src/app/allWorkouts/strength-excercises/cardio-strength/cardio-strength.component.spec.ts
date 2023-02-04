import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioStrengthComponent } from './cardio-strength.component';

describe('CardioStrengthComponent', () => {
  let component: CardioStrengthComponent;
  let fixture: ComponentFixture<CardioStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioStrengthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardioStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
