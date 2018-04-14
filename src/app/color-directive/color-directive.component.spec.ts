import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDirectiveComponent } from './color-directive.component';

describe('ColorDirectiveComponent', () => {
  let component: ColorDirectiveComponent;
  let fixture: ComponentFixture<ColorDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
