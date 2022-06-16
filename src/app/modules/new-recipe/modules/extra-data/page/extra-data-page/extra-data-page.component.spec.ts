import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDataPageComponent } from './extra-data-page.component';

describe('ExtraDataPageComponent', () => {
  let component: ExtraDataPageComponent;
  let fixture: ComponentFixture<ExtraDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
