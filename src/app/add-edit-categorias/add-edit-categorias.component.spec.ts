import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCategoriasComponent } from './add-edit-categorias.component';

describe('AddEditCategoriasComponent', () => {
  let component: AddEditCategoriasComponent;
  let fixture: ComponentFixture<AddEditCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCategoriasComponent]
    });
    fixture = TestBed.createComponent(AddEditCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
