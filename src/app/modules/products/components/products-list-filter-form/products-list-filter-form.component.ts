import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-list-filter-form',
  templateUrl: './products-list-filter-form.component.html',
  styleUrls: ['./products-list-filter-form.component.scss'],
})
export class ProductsListFilterFormComponent implements OnInit {
  filterProductsForm: FormGroup;
  @Output() filterByChange: EventEmitter<string>;

  constructor(private _formBuilder: FormBuilder) {
    this.filterProductsForm = this._formBuilder.group({
      filterBy: [''],
    });
    this.filterByChange = new EventEmitter<string>();
  }

  ngOnInit(): void {
    this.handleFilterProductsFormChange();
  }

  handleFilterProductsFormChange(): void {
    this.filterProductsForm.valueChanges.subscribe(
      (filterProductsForm: { filterBy: string }) => {
        this.filterByChange.emit(filterProductsForm.filterBy.trim());
      }
    );
  }
}
