import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAssignComponent } from './prod-assign.component';

describe('ProdAssignComponent', () => {
  let component: ProdAssignComponent;
  let fixture: ComponentFixture<ProdAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
