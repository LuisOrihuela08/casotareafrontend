import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectoresComponent } from './lectores.component';

describe('LectoresComponent', () => {
  let component: LectoresComponent;
  let fixture: ComponentFixture<LectoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LectoresComponent]
    });
    fixture = TestBed.createComponent(LectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
