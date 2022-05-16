import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingWineComponent } from './drinking-wine.component';

describe('DrinkingWineComponent', () => {
  let component: DrinkingWineComponent;
  let fixture: ComponentFixture<DrinkingWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkingWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
