import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviewComponent } from './childview.component';

describe('ChildviewComponent', () => {
  let component: ChildviewComponent;
  let fixture: ComponentFixture<ChildviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildviewComponent]
    });
    fixture = TestBed.createComponent(ChildviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
