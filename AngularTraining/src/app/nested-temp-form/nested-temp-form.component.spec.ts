import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTempFormComponent } from './nested-temp-form.component';

describe('NestedTempFormComponent', () => {
  let component: NestedTempFormComponent;
  let fixture: ComponentFixture<NestedTempFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedTempFormComponent]
    });
    fixture = TestBed.createComponent(NestedTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
