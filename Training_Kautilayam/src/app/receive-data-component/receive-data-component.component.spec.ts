import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveDataComponentComponent } from './receive-data-component.component';

describe('ReceiveDataComponentComponent', () => {
  let component: ReceiveDataComponentComponent;
  let fixture: ComponentFixture<ReceiveDataComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveDataComponentComponent]
    });
    fixture = TestBed.createComponent(ReceiveDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
