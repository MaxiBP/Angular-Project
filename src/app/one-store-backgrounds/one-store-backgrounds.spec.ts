import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStoreBackgrounds } from './one-store-backgrounds';

describe('OneStoreBackgrounds', () => {
  let component: OneStoreBackgrounds;
  let fixture: ComponentFixture<OneStoreBackgrounds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneStoreBackgrounds],
    }).compileComponents();

    fixture = TestBed.createComponent(OneStoreBackgrounds);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
