import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modcomp2Component } from './modcomp2.component';

describe('Modcomp2Component', () => {
  let component: Modcomp2Component;
  let fixture: ComponentFixture<Modcomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modcomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
