import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { cloneDeep } from 'lodash';
import { v4 } from 'uuid';

import { IProductsState } from '../models/state/products-state.model';
import { IStatsCategories } from '../models/entities/StatsCategories.entity';
import { IProduct } from '../models/entities/Product.entity';

import { APIService } from './api.service';
import { ErrorsService } from './errors.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends APIService {
  private readonly _productsState = new BehaviorSubject<IProductsState>({
    products: [],
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

  private _handleError(newAPIRequestID: string) {
    return (error: HttpErrorResponse) => {
      this._errorsService.createNewError(error.error);

      this._updateState({
        APIRequests: this._removeAPIRequestID(newAPIRequestID),
      });

      return throwError(
        () => new Error('Something bad happened, please try again later.')
      );
    };
  }

  setEditingProduct(productID: string): void {
    this._updateState({
      product: this._productsState
        .getValue()
        .products.filter((product) => product.id === productID)[0],
    });
  }

  removeEditingProduct(): void {
    this._updateState({
      product: undefined,
    });
  }

  getProducts(): void {
    const newAPIRequestID: string = v4();

    this._updateState({
      APIRequests: [...this._cloneState().APIRequests, newAPIRequestID],
    });

    this._http
      .get<IProduct[]>(this._productsAPI)
      .pipe(catchError(this._handleError(newAPIRequestID)))
      .subscribe((products) => {
        this._updateState({
          products,
          APIRequests: this._removeAPIRequestID(newAPIRequestID),
        });
      });
  }

  getCategories(): void {
    const newAPIRequestID: string = v4();

    this._updateState({
      APIRequests: [...this._cloneState().APIRequests, newAPIRequestID],
    });

    this._http
      .get<IStatsCategories[]>(this._statsAPI)
      .pipe(catchError(this._handleError(newAPIRequestID)))
      .subscribe((stats) => {
        this._updateState({
          stats,
          APIRequests: this._removeAPIRequestID(newAPIRequestID),
        });
      });
  }

  createProduct(
    employee: string,
    title: string,
    category: string,
    price: number,
    description?: string
  ): void {
    const newAPIRequestID: string = v4();

    this._updateState({
      APIRequests: [...this._cloneState().APIRequests, newAPIRequestID],
    });

    this._http
      .post(
        this._productsAPI,
        {
          employee,
          title,
          category,
          price,
          description: description ? description : '',
        },
        { responseType: 'text' }
      )
      .pipe(catchError(this._handleError(newAPIRequestID)))
      .subscribe((newProductID: string) => {
        this._updateState({
          products: [
            ...this._cloneState().products,
            {
              id: newProductID,
              data: {
                employee,
                title,
                category,
                price,
                description: description ? description : '',
              },
            },
          ],
          APIRequests: this._removeAPIRequestID(newAPIRequestID),
        });
      });
  }

  deleteProduct(productID: string): void {
    const newAPIRequestID: string = v4();

    this._updateState({
      APIRequests: [...this._cloneState().APIRequests, newAPIRequestID],
    });

    this._http
      .delete(`${this._productsAPI}/${productID}`)
      .pipe(catchError(this._handleError(newAPIRequestID)))
      .subscribe((response) => {
        this._updateState({
          products: [
            ...this._cloneState().products.filter(
              (product) => product.id !== productID
            ),
          ],
          APIRequests: this._removeAPIRequestID(newAPIRequestID),
        });
      });
  }
}
