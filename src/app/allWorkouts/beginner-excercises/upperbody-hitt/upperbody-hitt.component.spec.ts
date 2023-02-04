import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperbodyHittComponent } from './upperbody-hitt.component';

describe('UpperbodyHittComponent', () => {
  let component: UpperbodyHittComponent;
  let fixture: ComponentFixture<UpperbodyHittComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperbodyHittComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperbodyHittComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
