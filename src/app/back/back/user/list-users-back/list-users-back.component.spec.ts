import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersBackComponent } from './list-users-back.component';

describe('ListUsersBackComponent', () => {
  let component: ListUsersBackComponent;
  let fixture: ComponentFixture<ListUsersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUsersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
