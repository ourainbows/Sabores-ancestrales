import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRecipesComponent } from './tab-recipes.component';

describe('TabRecipesComponent', () => {
  let component: TabRecipesComponent;
  let fixture: ComponentFixture<TabRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
