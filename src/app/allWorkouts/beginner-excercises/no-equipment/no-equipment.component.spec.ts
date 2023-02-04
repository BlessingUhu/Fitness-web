import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEquipmentComponent } from './no-equipment.component';

describe('NoEquipmentComponent', () => {
  let component: NoEquipmentComponent;
  let fixture: ComponentFixture<NoEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
