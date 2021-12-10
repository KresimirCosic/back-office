import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IProductsState } from '../../../../../models/state/products-state.model';

import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  productsState$: Observable<IProductsState>;

  constructor(private _productsState: ProductsService) {
    this.productsState$ = this._productsState.productsState$;
  }

  ngOnInit(): void {}
}
