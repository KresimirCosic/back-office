import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { APIService } from './api.service';
import { IProductsState } from '../models/state/products-state.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends APIService {
  private readonly _productsState = new BehaviorSubject<IProductsState>({
    products: [],
    product: undefined,
    stats: undefined,
    APIRequests: [],
  });
  readonly productsState$ = this._productsState.asObservable();

  constructor() {
    super();
  }
}
