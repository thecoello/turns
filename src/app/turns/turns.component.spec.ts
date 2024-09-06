import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnsComponent } from './turns.component';

describe('TurnsComponent', () => {
  let component: TurnsComponent;
  let fixture: ComponentFixture<TurnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurnsComponent]
    });
    fixture = TestBed.createComponent(TurnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
