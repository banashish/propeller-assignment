import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidePaneComponent } from './left-side-pane.component';

describe('LeftSidePaneComponent', () => {
  let component: LeftSidePaneComponent;
  let fixture: ComponentFixture<LeftSidePaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSidePaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
