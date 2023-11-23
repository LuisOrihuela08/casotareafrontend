import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlectoresComponent } from './editlectores.component';

describe('EditlectoresComponent', () => {
  let component: EditlectoresComponent;
  let fixture: ComponentFixture<EditlectoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlectoresComponent]
    });
    fixture = TestBed.createComponent(EditlectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
