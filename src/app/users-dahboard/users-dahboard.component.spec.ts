import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDahboardComponent } from './users-dahboard.component';

describe('UsersDahboardComponent', () => {
  let component: UsersDahboardComponent;
  let fixture: ComponentFixture<UsersDahboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDahboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
