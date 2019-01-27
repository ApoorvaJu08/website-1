import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContriComponent } from './contri.component';

describe('ContriComponent', () => {
  let component: ContriComponent;
  let fixture: ComponentFixture<ContriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
