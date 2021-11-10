import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IProductsState } from '../models/state/product-state.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _productsState = new BehaviorSubject<IProductsState>({
    products: [],
    product: undefined,
    stats: undefined,
  });
  readonly productsState$ = this._productsState.asObservable();

  constructor() {}
}
