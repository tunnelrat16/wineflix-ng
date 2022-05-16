import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountConsumedComponent } from './amount-consumed.component';

describe('AmountConsumedComponent', () => {
  let component: AmountConsumedComponent;
  let fixture: ComponentFixture<AmountConsumedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountConsumedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountConsumedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
