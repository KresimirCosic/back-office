import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { cloneDeep } from 'lodash';

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
  private readonly _productsAPI: string = `${this.API}/products`;
  private readonly _statsAPI: string = `${this.API}/stats/categories`;

  constructor() {
    super();
  }

  private _cloneState(): IProductsState {
    return cloneDeep(this._productsState.getValue());
  }

  private _updateState(productsStateValue: Partial<IProductsState>): void {
    this._productsState.next({
      ...this._cloneState(),
      ...productsStateValue,
    });
  }

  private _removeAPIRequestID(newAPIRequestID: string): string[] {
    return this._cloneState()['APIRequests'].filter(
      (APIRequestID) => APIRequestID !== newAPIRequestID
    );
  }
}
