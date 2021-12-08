import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
})
export class EditProductFormComponent implements OnInit {
  @Input() product: IProduct | undefined;

  constructor() {
    this.product = undefined;
  }

  ngOnInit(): void {}
}
