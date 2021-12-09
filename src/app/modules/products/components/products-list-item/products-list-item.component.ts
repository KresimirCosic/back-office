import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: IProduct | undefined;

  constructor(private _productsService: ProductsService) {
    this.product = undefined;
  }

  ngOnInit(): void {}

  onDeleteProduct(productID: string): void {
    this._productsService.deleteProduct(productID);
  }
}
