import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentPanel } from './persistent-panel';

describe('PersistentPanel', () => {
  let component: PersistentPanel;
  let fixture: ComponentFixture<PersistentPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistentPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersistentPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
