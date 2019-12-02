import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdMgmtComponent } from './prod-mgmt.component';

describe('ProdMgmtComponent', () => {
  let component: ProdMgmtComponent;
  let fixture: ComponentFixture<ProdMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
