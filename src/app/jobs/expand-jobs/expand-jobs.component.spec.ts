import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandJobsComponent } from './expand-jobs.component';

describe('ExpandJobsComponent', () => {
  let component: ExpandJobsComponent;
  let fixture: ComponentFixture<ExpandJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
