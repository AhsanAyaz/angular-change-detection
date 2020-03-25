import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionTreeComponent } from './change-detection-tree.component';

describe('ChangeDetectionTreeComponent', () => {
  let component: ChangeDetectionTreeComponent;
  let fixture: ComponentFixture<ChangeDetectionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
