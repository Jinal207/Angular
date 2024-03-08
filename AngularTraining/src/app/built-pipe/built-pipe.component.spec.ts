import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltPipeComponent } from './built-pipe.component';

describe('BuiltPipeComponent', () => {
  let component: BuiltPipeComponent;
  let fixture: ComponentFixture<BuiltPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltPipeComponent]
    });
    fixture = TestBed.createComponent(BuiltPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
