import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeButtonComponent } from './create-recipe-button.component';

describe('CreateRecipeButtonComponent', () => {
  let component: CreateRecipeButtonComponent;
  let fixture: ComponentFixture<CreateRecipeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecipeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
