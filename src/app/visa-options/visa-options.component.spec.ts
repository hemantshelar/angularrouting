import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaOptionsComponent } from './visa-options.component';

describe('VisaOptionsComponent', () => {
  let component: VisaOptionsComponent;
  let fixture: ComponentFixture<VisaOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
