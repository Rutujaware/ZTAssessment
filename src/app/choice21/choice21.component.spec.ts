import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choice21Component } from './choice21.component';

describe('Choice21Component', () => {
  let component: Choice21Component;
  let fixture: ComponentFixture<Choice21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Choice21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Choice21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
