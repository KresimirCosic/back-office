import { Component, OnInit, Input } from '@angular/core';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-products-list-controls',
  templateUrl: './products-list-controls.component.html',
  styleUrls: ['./products-list-controls.component.scss'],
})
export class ProductsListControlsComponent implements OnInit {
  @Input() filteredProducts: IProduct[] | undefined;
  @Input() gridView: boolean;

  constructor() {
    this.filteredProducts = undefined;
    this.gridView = false;
  }

  ngOnInit(): void {}
}
