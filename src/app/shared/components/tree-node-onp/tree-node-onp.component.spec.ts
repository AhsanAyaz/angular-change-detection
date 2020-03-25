import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeOnpComponent } from './tree-node-onp.component';

describe('TreeNodeOnpComponent', () => {
  let component: TreeNodeOnpComponent;
  let fixture: ComponentFixture<TreeNodeOnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeOnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeOnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
