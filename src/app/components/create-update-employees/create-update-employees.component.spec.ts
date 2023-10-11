import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateEmployeesComponent } from './create-update-employees.component';

describe('CreateUpdateEmployeesComponent', () => {
  let component: CreateUpdateEmployeesComponent;
  let fixture: ComponentFixture<CreateUpdateEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
