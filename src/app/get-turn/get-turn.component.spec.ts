import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTurnComponent } from './get-turn.component';

describe('GetTurnComponent', () => {
  let component: GetTurnComponent;
  let fixture: ComponentFixture<GetTurnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTurnComponent]
    });
    fixture = TestBed.createComponent(GetTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
