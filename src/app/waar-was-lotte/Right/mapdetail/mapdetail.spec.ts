import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapdetail } from './mapdetail';

describe('Mapdetail', () => {
  let component: Mapdetail;
  let fixture: ComponentFixture<Mapdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mapdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mapdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
