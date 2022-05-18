import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineImageComponent } from './wine-image.component';

describe('WineImageComponent', () => {
  let component: WineImageComponent;
  let fixture: ComponentFixture<WineImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
