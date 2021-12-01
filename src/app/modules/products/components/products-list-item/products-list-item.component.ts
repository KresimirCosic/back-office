import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: IProduct | undefined;

  constructor() {
    this.product = undefined;
  }

  ngOnInit(): void {}
}
