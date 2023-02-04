import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerStrengthComponent } from './lower-strength.component';

describe('LowerStrengthComponent', () => {
  let component: LowerStrengthComponent;
  let fixture: ComponentFixture<LowerStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerStrengthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
