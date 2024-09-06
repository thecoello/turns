import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallturnComponent } from './callturn.component';

describe('CallturnComponent', () => {
  let component: CallturnComponent;
  let fixture: ComponentFixture<CallturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallturnComponent]
    });
    fixture = TestBed.createComponent(CallturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
