import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofempbydeptComponent } from './listofempbydept.component';

describe('ListofempbydeptComponent', () => {
  let component: ListofempbydeptComponent;
  let fixture: ComponentFixture<ListofempbydeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofempbydeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofempbydeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
