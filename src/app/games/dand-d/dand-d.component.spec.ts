import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DandDComponent } from './dand-d.component';

describe('DandDComponent', () => {
  let component: DandDComponent;
  let fixture: ComponentFixture<DandDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DandDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DandDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
