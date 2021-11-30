import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IProductsState } from '../../../../../models/state/products-state.model';
import { ProductsService } from '../../../../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productsState$: Observable<IProductsState>;

  constructor(private _productsService: ProductsService) {
    this.productsState$ = this._productsService.productsState$;
  }

  ngOnInit(): void {}
}
