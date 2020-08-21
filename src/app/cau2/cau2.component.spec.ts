import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cau2Component } from './cau2.component';

describe('Cau2Component', () => {
  let component: Cau2Component;
  let fixture: ComponentFixture<Cau2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cau2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
