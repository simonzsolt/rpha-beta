/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerseComponent } from './verse.component';

describe('VerseComponent', () => {
  let component: VerseComponent;
  let fixture: ComponentFixture<VerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
