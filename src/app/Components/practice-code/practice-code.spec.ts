import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCode } from './practice-code';

describe('PracticeCode', () => {
  let component: PracticeCode;
  let fixture: ComponentFixture<PracticeCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeCode],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeCode);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
