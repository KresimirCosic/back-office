import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListFilterFormComponent } from './products-list-filter-form.component';

describe('ProductsListFilterFormComponent', () => {
  let component: ProductsListFilterFormComponent;
  let fixture: ComponentFixture<ProductsListFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListFilterFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
