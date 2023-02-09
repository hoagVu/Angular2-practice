/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CockfitComponent } from './cockfit.component';

describe('CockfitComponent', () => {
  let component: CockfitComponent;
  let fixture: ComponentFixture<CockfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
