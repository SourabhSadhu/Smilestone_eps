import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSortTableComponent } from './mat-sort-table.component';

describe('MatSortTableComponent', () => {
  let component: MatSortTableComponent;
  let fixture: ComponentFixture<MatSortTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSortTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
