import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IProduct } from '../../../../models/entities/Product.entity';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss'],
})
export class EditProductFormComponent implements OnInit {
  @Input() product: IProduct | undefined;
  editProductForm: FormGroup | undefined;

  constructor(private _formBuilder: FormBuilder) {
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
}
