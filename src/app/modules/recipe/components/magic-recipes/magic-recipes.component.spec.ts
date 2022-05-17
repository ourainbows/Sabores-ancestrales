import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicRecipesComponent } from './magic-recipes.component';

describe('MagicRecipesComponent', () => {
  let component: MagicRecipesComponent;
  let fixture: ComponentFixture<MagicRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
