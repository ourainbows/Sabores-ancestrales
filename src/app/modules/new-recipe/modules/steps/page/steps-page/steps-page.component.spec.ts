import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsPageComponent } from './steps-page.component';

describe('StepsPageComponent', () => {
  let component: StepsPageComponent;
  let fixture: ComponentFixture<StepsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
