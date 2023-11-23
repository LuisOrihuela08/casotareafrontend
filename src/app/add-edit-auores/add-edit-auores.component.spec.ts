import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAuoresComponent } from './add-edit-auores.component';

describe('AddEditAuoresComponent', () => {
  let component: AddEditAuoresComponent;
  let fixture: ComponentFixture<AddEditAuoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAuoresComponent]
    });
    fixture = TestBed.createComponent(AddEditAuoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
