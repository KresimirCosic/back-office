import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-products-list-controls',
  templateUrl: './products-list-controls.component.html',
  styleUrls: ['./products-list-controls.component.scss'],
})
export class ProductsListControlsComponent implements OnInit {
  @Input() filteredProducts: IProduct[] | undefined;
  @Input() gridView: boolean | undefined;
  @Input() itemsPerPage: number | undefined;
  @Input() currentPage: number | undefined;
  @Output() gridViewChange: EventEmitter<boolean>;

  constructor() {
    this.filteredProducts = undefined;
    this.gridView = undefined;
    this.itemsPerPage = undefined;
    this.currentPage = undefined;
    this.gridViewChange = new EventEmitter<boolean>();
  }

  ngOnInit(): void {}

  handleGridViewChange(): void {
    this.gridViewChange.emit();
  }
}
