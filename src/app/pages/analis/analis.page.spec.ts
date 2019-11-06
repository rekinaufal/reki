import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisPage } from './analis.page';

describe('AnalisPage', () => {
  let component: AnalisPage;
  let fixture: ComponentFixture<AnalisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
