import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProduct } from 'src/app/models/entities/Product.entity';
import { IProductsState } from '../../../../models/state/products-state.model';

import { ProductsService } from '../../../../services/products.service';

interface IPaginationControls {
  gridView: boolean;
  itemsPerPage: number;
  currentPage: number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  productsState$: Observable<IProductsState>;
  gridView$: BehaviorSubject<boolean>;
  itemsPerPage$: BehaviorSubject<number>;
  currentPage$: BehaviorSubject<number>;
  filterBy$: BehaviorSubject<string>;
  filteredProducts$: Observable<IProduct[]>;
  paginationControls$: Observable<IPaginationControls>;
  vm$: Observable<{
    filteredProducts: IProduct[];
    paginationControls: IPaginationControls;
  }>;

  constructor(private _productsService: ProductsService) {
    this.productsState$ = this._productsService.productsState$;
    this.gridView$ = new BehaviorSubject<boolean>(false);
    this.itemsPerPage$ = new BehaviorSubject<number>(5);
    this.currentPage$ = new BehaviorSubject<number>(1);
    this.filterBy$ = new BehaviorSubject<string>('');
    this.filteredProducts$ = combineLatest([
      this.filterBy$,
      this.productsState$,
    ]).pipe(
      map((observer) => {
        const filterBy = observer[0];
        const { products } = observer[1];

        return products.filter((product) =>
          product.data.title.toLowerCase().includes(filterBy.toLowerCase())
        );
      })
    );
    this.paginationControls$ = combineLatest([
      this.gridView$,
      this.itemsPerPage$,
      this.currentPage$,
    ]).pipe(
      map((observer) => {
        const gridView = observer[0];
        const itemsPerPage = observer[1];
        const currentPage = observer[2];

        return {
          gridView,
          itemsPerPage,
          currentPage,
        };
      })
    );
    this.vm$ = combineLatest([
      this.filteredProducts$,
      this.paginationControls$,
    ]).pipe(
      map(([filteredProducts, paginationControls]) => {
        return {
          filteredProducts,
          paginationControls,
        };
      })
    );
  }

  ngOnInit(): void {}

  toggleGridView(): void {
    this.gridView$.next(!this.gridView$.getValue());
  }
}
