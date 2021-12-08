import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, take } from 'rxjs/operators';

import { ProductsService } from '../../../../services/products.service';
import { AuthenticationService } from '../../../../services/authentication.service';

interface ICreateProductFormGroup {
  title: string;
  category: string;
  price: number;
  description: string;
}

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

  onCreateProduct(): void {
    this._authenticationService.authenticationState$
      .pipe(
        take(1),
        map((authenticationState) => {
          return { authenticationState };
        })
      )
      .subscribe(({ authenticationState }) => {
        const { username } = authenticationState;
        const { title, category, price, description } =
          this.createProductForm.getRawValue() as ICreateProductFormGroup;

        this._productsService.createProduct(
          username,
          title,
          category,
          price,
          description
        );
      });
  }

  resetCreateProductForm(): void {
    this.createProductForm.reset();
  }
}
