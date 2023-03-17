import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaPaginationComponent } from './criteria-pagination.component';

describe('CriteriaPaginationComponent', () => {
  let component: CriteriaPaginationComponent;
  let fixture: ComponentFixture<CriteriaPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteriaPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteriaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
