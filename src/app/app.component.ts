import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd } from '@angular/router';

import { UserInterfaceService } from './services/user-interface.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userInterfaceState$ = this._userInterfaceService.userInterfaceState$;

  constructor(
    private _router: Router,
    private _userInterfaceService: UserInterfaceService,
    private _productsService: ProductsService
  ) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this._userInterfaceService.closeSidenav();
      }
    });
  }

  handleClosingSidenav(): void {
    this._userInterfaceService.closeSidenav();
  }

  ngOnInit(): void {
    this._productsService.getProducts();
    this._productsService.getCategories();
  }
}
