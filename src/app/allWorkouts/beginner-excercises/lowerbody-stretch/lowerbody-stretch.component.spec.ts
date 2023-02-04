import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerbodyStretchComponent } from './lowerbody-stretch.component';

describe('LowerbodyStretchComponent', () => {
  let component: LowerbodyStretchComponent;
  let fixture: ComponentFixture<LowerbodyStretchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerbodyStretchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerbodyStretchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
