import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStoreAbout } from './one-store-about';

describe('OneStoreAbout', () => {
  let component: OneStoreAbout;
  let fixture: ComponentFixture<OneStoreAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneStoreAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(OneStoreAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
