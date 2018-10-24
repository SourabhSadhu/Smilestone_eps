import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackhelperComponent } from './snackhelper.component';

describe('SnackhelperComponent', () => {
  let component: SnackhelperComponent;
  let fixture: ComponentFixture<SnackhelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackhelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackhelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
