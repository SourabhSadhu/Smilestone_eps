import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMediumSiteComponent } from './print-medium-site.component';

describe('PrintMediumSiteComponent', () => {
  let component: PrintMediumSiteComponent;
  let fixture: ComponentFixture<PrintMediumSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMediumSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMediumSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
