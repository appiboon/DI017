import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesSearchComponent } from './fees-search.component';

describe('FeesSearchComponent', () => {
  let component: FeesSearchComponent;
  let fixture: ComponentFixture<FeesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
