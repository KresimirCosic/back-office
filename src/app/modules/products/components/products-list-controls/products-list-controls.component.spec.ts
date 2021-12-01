import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListControlsComponent } from './products-list-controls.component';

describe('ProductsListControlsComponent', () => {
  let component: ProductsListControlsComponent;
  let fixture: ComponentFixture<ProductsListControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListControlsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
