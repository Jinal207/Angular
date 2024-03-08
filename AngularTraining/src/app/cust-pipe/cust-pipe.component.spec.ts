import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPipeComponent } from './cust-pipe.component';

describe('CustPipeComponent', () => {
  let component: CustPipeComponent;
  let fixture: ComponentFixture<CustPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustPipeComponent]
    });
    fixture = TestBed.createComponent(CustPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
