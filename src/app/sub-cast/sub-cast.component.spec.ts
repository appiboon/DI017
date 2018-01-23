import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCastComponent } from './sub-cast.component';

describe('SubCastComponent', () => {
  let component: SubCastComponent;
  let fixture: ComponentFixture<SubCastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
