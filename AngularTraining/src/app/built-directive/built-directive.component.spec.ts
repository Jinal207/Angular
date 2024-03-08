import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltDirectiveComponent } from './built-directive.component';

describe('BuiltDirectiveComponent', () => {
  let component: BuiltDirectiveComponent;
  let fixture: ComponentFixture<BuiltDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltDirectiveComponent]
    });
    fixture = TestBed.createComponent(BuiltDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
