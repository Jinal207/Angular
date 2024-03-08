import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataComponentComponent } from './send-data-component.component';

describe('SendDataComponentComponent', () => {
  let component: SendDataComponentComponent;
  let fixture: ComponentFixture<SendDataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendDataComponentComponent]
    });
    fixture = TestBed.createComponent(SendDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
