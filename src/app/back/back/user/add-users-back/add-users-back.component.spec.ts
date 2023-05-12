import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersBackComponent } from './add-users-back.component';

describe('AddUsersBackComponent', () => {
  let component: AddUsersBackComponent;
  let fixture: ComponentFixture<AddUsersBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
