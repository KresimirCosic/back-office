import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavControlsComponent } from './sidenav-controls.component';

describe('SidenavControlsComponent', () => {
  let component: SidenavControlsComponent;
  let fixture: ComponentFixture<SidenavControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavControlsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
