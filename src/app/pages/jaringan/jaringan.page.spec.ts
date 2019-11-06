import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaringanPage } from './jaringan.page';

describe('JaringanPage', () => {
  let component: JaringanPage;
  let fixture: ComponentFixture<JaringanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaringanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaringanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
