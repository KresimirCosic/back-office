import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IProductsState } from '../../../../../models/state/products-state.model';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsState$: Observable<IProductsState>;

  constructor(private _productsService: ProductsService) {
    this.productsState$ = this._productsService.productsState$;
  }

  ngOnInit(): void {}
}
