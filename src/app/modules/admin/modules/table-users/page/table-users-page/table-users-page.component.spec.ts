import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUsersPageComponent } from './table-users-page.component';

describe('TableUsersPageComponent', () => {
  let component: TableUsersPageComponent;
  let fixture: ComponentFixture<TableUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUsersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
