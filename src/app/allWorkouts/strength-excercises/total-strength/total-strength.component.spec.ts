import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStrengthComponent } from './total-strength.component';

describe('TotalStrengthComponent', () => {
  let component: TotalStrengthComponent;
  let fixture: ComponentFixture<TotalStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStrengthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
