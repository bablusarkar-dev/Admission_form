import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmission } from './addmission';

describe('Addmission', () => {
  let component: Addmission;
  let fixture: ComponentFixture<Addmission>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addmission],
    }).compileComponents();

    fixture = TestBed.createComponent(Addmission);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
