import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesHeadSearchComponent } from './fees-head-search.component';

describe('FeesHeadSearchComponent', () => {
  let component: FeesHeadSearchComponent;
  let fixture: ComponentFixture<FeesHeadSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesHeadSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesHeadSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
