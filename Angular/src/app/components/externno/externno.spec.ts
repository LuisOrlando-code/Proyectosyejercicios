import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Externno } from './externno';

describe('Externno', () => {
  let component: Externno;
  let fixture: ComponentFixture<Externno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Externno],
    }).compileComponents();

    fixture = TestBed.createComponent(Externno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
