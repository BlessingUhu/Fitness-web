import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityFitnessComponent } from './unity-fitness.component';

describe('UnityFitnessComponent', () => {
  let component: UnityFitnessComponent;
  let fixture: ComponentFixture<UnityFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityFitnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnityFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
