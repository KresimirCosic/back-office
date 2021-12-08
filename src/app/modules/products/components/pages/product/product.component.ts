import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IProductsState } from '../../../../../models/state/products-state.model';

import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  productsState$: Observable<IProductsState>;

  constructor(
    private _route: ActivatedRoute,
    private _productsService: ProductsService
  ) {
    this.productsState$ = this._productsService.productsState$;
  }

  ngOnInit(): void {
    const productID = this._route.snapshot.params['id'];
    this._productsService.setEditingProduct(productID);
  }

  ngOnDestroy(): void {
    this._productsService.removeEditingProduct();
  }
}
