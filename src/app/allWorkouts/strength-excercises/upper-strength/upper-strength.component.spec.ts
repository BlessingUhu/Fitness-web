import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperStrengthComponent } from './upper-strength.component';

describe('UpperStrengthComponent', () => {
  let component: UpperStrengthComponent;
  let fixture: ComponentFixture<UpperStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperStrengthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
