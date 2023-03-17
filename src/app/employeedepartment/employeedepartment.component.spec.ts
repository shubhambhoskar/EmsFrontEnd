import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedepartmentComponent } from './employeedepartment.component';

describe('EmployeedepartmentComponent', () => {
  let component: EmployeedepartmentComponent;
  let fixture: ComponentFixture<EmployeedepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
