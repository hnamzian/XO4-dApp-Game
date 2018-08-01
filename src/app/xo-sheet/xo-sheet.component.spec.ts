import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XOSheetComponent } from './xo-sheet.component';

describe('XOSheetComponent', () => {
  let component: XOSheetComponent;
  let fixture: ComponentFixture<XOSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XOSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XOSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
