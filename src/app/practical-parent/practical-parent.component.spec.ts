import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalParentComponent } from './practical-parent.component';

describe('PracticalParentComponent', () => {
  let component: PracticalParentComponent;
  let fixture: ComponentFixture<PracticalParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
