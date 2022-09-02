import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecipesPageComponent } from './table-recipes-page.component';

describe('TableRecipesPageComponent', () => {
  let component: TableRecipesPageComponent;
  let fixture: ComponentFixture<TableRecipesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRecipesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
