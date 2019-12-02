import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdConvComponent } from './prod-conv.component';

describe('ProdConvComponent', () => {
  let component: ProdConvComponent;
  let fixture: ComponentFixture<ProdConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
