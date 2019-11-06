import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaumPage } from './baum.page';

describe('BaumPage', () => {
  let component: BaumPage;
  let fixture: ComponentFixture<BaumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
