import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsexamComponent } from './jsexam.component';

describe('JsexamComponent', () => {
  let component: JsexamComponent;
  let fixture: ComponentFixture<JsexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
