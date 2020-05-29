import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashBtnComponent } from './trash-btn.component';

describe('TrashBtnComponent', () => {
  let component: TrashBtnComponent;
  let fixture: ComponentFixture<TrashBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
