import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTT002Component } from './choice-tt002.component';

describe('ChoiceTT002Component', () => {
  let component: ChoiceTT002Component;
  let fixture: ComponentFixture<ChoiceTT002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceTT002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceTT002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
