import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { cloneDeep } from 'lodash';
import { v4 } from 'uuid';

import { APIService } from './api.service';
import { ErrorsService } from './errors.service';
import { IProductsState } from '../models/state/products-state.model';
import { IStatsCategories } from '../models/entities/StatsCategories.entity';
import { IProduct } from '../models/entities/Product.entity';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends APIService {
  private readonly _productsState = new BehaviorSubject<IProductsState>({
    products: [
      {
        id: v4(),
        data: {
          title: 'Product 1',
          category: 'Biscuits',
          employee: 'John',
          price: 22,
          description: 'Limp biscuits',
        },
      },
      {
        id: v4(),
        data: {
          title: 'Product 2',
          category: 'Biscuits',
          employee: 'John',
          price: 22,
          description: 'Limp biscuits',
        },
      },
      {
        id: v4(),
        data: {
          title: 'Product 3',
          category: 'Biscuits',
          employee: 'John',
          price: 22,
          description: 'Limp biscuits',
        },
      },
      {
        id: v4(),
        data: {
          title: 'Product 4',
          category: 'Biscuits',
          employee: 'John',
          price: 22,
          description: 'Limp biscuits',
        },
      },
      {
        id: v4(),
        data: {
          title: 'Product 5',
          category: 'Biscuits',
          employee: 'John',
          price: 22,
          description: 'Limp biscuits',
        },
      },
    ],
    product: undefined,
    stats: [],
    APIRequests: [],
  });
  readonly productsState$ = this._productsState.asObservable();
  private readonly _productsAPI: string = `${this.API}/products`;
  private readonly _statsAPI: string = `${this.API}/stats/categories`;

  constructor(
    private _http: HttpClient,
    private _errorsService: ErrorsService
  ) {
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
    return this._cloneState().APIRequests.filter(
      (APIRequestID) => APIRequestID !== newAPIRequestID
    );
  }

  getProducts() {
    const newAPIRequestID: string = v4();

    this._updateState({
      APIRequests: [...this._cloneState().APIRequests, newAPIRequestID],
    });

    this._http
      .get<IProduct[]>(this._productsAPI)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this._errorsService.createNewError(error.error);

          this._updateState({
            APIRequests: this._removeAPIRequestID(newAPIRequestID),
          });

          return throwError(
            () => new Error('Something bad happened, please try again later.')
          );
        })
      )
      .subscribe((products) => {
        this._updateState({
          products,
          APIRequests: this._removeAPIRequestID(newAPIRequestID),
        });
      });
  }

  getCategories() {
    const newAPIRequestID: string = v4();

    this._updateState({
      APIRequests: [...this._cloneState().APIRequests, newAPIRequestID],
    });

    this._http
      .get<IStatsCategories[]>(this._statsAPI)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this._errorsService.createNewError(error.error);

          this._updateState({
            APIRequests: this._removeAPIRequestID(newAPIRequestID),
          });

          return throwError(
            () => new Error('Something bad happened, please try again later.')
          );
        })
      )
      .subscribe((stats) => {
        this._updateState({
          stats,
          APIRequests: this._removeAPIRequestID(newAPIRequestID),
        });
      });
  }
}
