import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from '../../../../services/products.service';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent implements OnInit {
  createProductForm: FormGroup;

  constructor(
    private _authenticationService: AuthenticationService,
    private _productsService: ProductsService,
    private _formBuilder: FormBuilder
  ) {
    this.createProductForm = this._formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(1)]],
      description: [''],
    });
  }

  ngOnInit(): void {}
}
