import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IProductsState } from '../../../../models/state/products-state.model';

import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsState$: Observable<IProductsState>;
  gridView: boolean = false;

  constructor(private _productsService: ProductsService) {
    this.productsState$ = this._productsService.productsState$;
  }

  ngOnInit(): void {}

  toggleGridView(): void {
    this.gridView = !this.gridView;
  }
}
