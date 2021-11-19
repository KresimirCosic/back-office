import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IUserInterfaceState } from '../models/state/user-interface-state.model';
import { AuthenticationService } from './authentication.service';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class UserInterfaceService {
  private readonly _userInterfaceState =
    new BehaviorSubject<IUserInterfaceState>({
      loading: false,
      sidenavOpened: false,
    });
  readonly userInterfaceState$ = this._userInterfaceState.asObservable();

  constructor(
    private _authenticationService: AuthenticationService,
    private _productsService: ProductsService
  ) {
    this._authenticationService.authenticationState$.subscribe(
      // todo
      (authenticationState) => {
        if (authenticationState.APIrequests.length) {
          this._userInterfaceState.next({
            ...this._userInterfaceState.getValue(),
            loading: true,
          });
        } else {
          this._userInterfaceState.next({
            ...this._userInterfaceState.getValue(),
            loading: false,
          });
        }
      }
    );
  }

  openSidenav(): void {
    this._userInterfaceState.next({
      ...this._userInterfaceState.getValue(),
      sidenavOpened: true,
    });
  }

  closeSidenav(): void {
    this._userInterfaceState.next({
      ...this._userInterfaceState.getValue(),
      sidenavOpened: false,
    });
  }

  toggleSidenav(): void {
    this._userInterfaceState.next({
      ...this._userInterfaceState.getValue(),
      sidenavOpened: !this._userInterfaceState.getValue().sidenavOpened,
    });
  }
}
