import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdTreePageComponent } from './cd-tree-page.component';

describe('CdTreePageComponent', () => {
  let component: CdTreePageComponent;
  let fixture: ComponentFixture<CdTreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdTreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
