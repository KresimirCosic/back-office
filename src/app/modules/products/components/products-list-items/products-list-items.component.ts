import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-products-list-items',
  templateUrl: './products-list-items.component.html',
  styleUrls: ['./products-list-items.component.scss'],
})
export class ProductsListItemsComponent implements OnInit, OnChanges {
  @Input() products: IProduct[] | undefined;
  @Input() itemsPerPage: number | undefined;
  @Input() currentPage: number | undefined;
  paginatedProducts: IProduct[] | undefined;

  constructor() {
    this.products = undefined;
    this.itemsPerPage = undefined;
    this.currentPage = undefined;
    this.paginatedProducts = undefined;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.paginatedProducts = this.products!.slice(
      (this.currentPage! - 1) * this.itemsPerPage!,
      this.itemsPerPage! * this.currentPage!
    );
  }
}
