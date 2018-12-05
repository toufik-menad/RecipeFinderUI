import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDropDownComponent } from './login-drop-down.component';

describe('LoginDropDownComponent', () => {
  let component: LoginDropDownComponent;
  let fixture: ComponentFixture<LoginDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
