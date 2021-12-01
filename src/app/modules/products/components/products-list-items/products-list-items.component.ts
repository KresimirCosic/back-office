import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-products-list-items',
  templateUrl: './products-list-items.component.html',
  styleUrls: ['./products-list-items.component.scss'],
})
export class ProductsListItemsComponent implements OnInit {
  @Input() products: IProduct[] | undefined;

  constructor() {
    this.products = undefined;
  }

  ngOnInit(): void {}
}
