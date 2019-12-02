import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransMgmtComponent } from './trans-mgmt.component';

describe('TransMgmtComponent', () => {
  let component: TransMgmtComponent;
  let fixture: ComponentFixture<TransMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
