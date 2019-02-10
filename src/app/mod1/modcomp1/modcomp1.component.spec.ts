import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modcomp1Component } from './modcomp1.component';

describe('Modcomp1Component', () => {
  let component: Modcomp1Component;
  let fixture: ComponentFixture<Modcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
