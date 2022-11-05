import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithArrayValueComponent } from './form-with-array-value.component';

describe('FormWithArrayValueComponent', () => {
  let component: FormWithArrayValueComponent;
  let fixture: ComponentFixture<FormWithArrayValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithArrayValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithArrayValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
