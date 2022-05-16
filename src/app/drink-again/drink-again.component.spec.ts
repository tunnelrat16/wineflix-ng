import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkAgainComponent } from './drink-again.component';

describe('DrinkAgainComponent', () => {
  let component: DrinkAgainComponent;
  let fixture: ComponentFixture<DrinkAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkAgainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
