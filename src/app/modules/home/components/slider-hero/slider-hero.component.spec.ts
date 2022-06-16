import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderHeroComponent } from './slider-hero.component';

describe('SliderHeroComponent', () => {
  let component: SliderHeroComponent;
  let fixture: ComponentFixture<SliderHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
