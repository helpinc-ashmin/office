import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldJobComponent } from './old-job.component';

describe('OldJobComponent', () => {
  let component: OldJobComponent;
  let fixture: ComponentFixture<OldJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
