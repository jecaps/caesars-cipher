import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftValueInputComponent } from './shift-value-input.component';

describe('ShiftValueInputComponent', () => {
  let component: ShiftValueInputComponent;
  let fixture: ComponentFixture<ShiftValueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftValueInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftValueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
