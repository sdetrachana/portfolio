import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilllsComponent } from './skillls.component';

describe('SkilllsComponent', () => {
  let component: SkilllsComponent;
  let fixture: ComponentFixture<SkilllsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilllsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilllsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
