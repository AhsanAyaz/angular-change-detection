import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonesDemoComponent } from './zones-demo.component';

describe('ZonesDemoComponent', () => {
  let component: ZonesDemoComponent;
  let fixture: ComponentFixture<ZonesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
