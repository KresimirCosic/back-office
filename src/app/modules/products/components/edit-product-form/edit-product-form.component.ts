import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  IProduct,
  IProductData,
} from '../../../../models/entities/Product.entity';

import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
})
export class EditProductFormComponent implements OnInit {
  @Input() product: IProduct | undefined;
  editProductForm: FormGroup | undefined;

  constructor(
    private _formBuilder: FormBuilder,
    private _productsService: ProductsService
  ) {
    this.product = undefined;
  }

  ngOnInit(): void {
    if (this.product) {
      const {
        id,
        data: { title, category, price, description, employee },
      } = this.product;

      this.editProductForm = this._formBuilder.group({
        title: [title, [Validators.required]],
        category: [category, [Validators.required]],
        price: [price, [Validators.required, Validators.min(1)]],
        description: [description ? description : ''],
        employee: [{ value: employee, disabled: true }],
      });
    }
  }

  onUpdateProduct(): void {
    if (this.product) {
      const { id } = this.product;
      const { title, category, price, description, employee } =
        this.editProductForm?.getRawValue() as IProductData;

      this._productsService.updateProduct({
        id,
        data: {
          title,
          category,
          price,
          description: description ? description : '',
          employee,
        },
      });
    }
  }
}
