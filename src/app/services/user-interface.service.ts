import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { cloneDeep } from 'lodash';

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
    combineLatest([
      this._authenticationService.authenticationState$,
      this._productsService.productsState$,
    ]).subscribe((statesOfAPIServices) => {
      if (
        statesOfAPIServices.some(
          (stateOfAPIService) => stateOfAPIService.APIRequests.length > 0
        )
      ) {
        this.openLoader();
      } else {
        this.closeLoader();
      }
    });
  }

  private _cloneState(): IUserInterfaceState {
    return cloneDeep(this._userInterfaceState.getValue());
  }

  private _updateState(
    userInterfaceStateValue: Partial<IUserInterfaceState>
  ): void {
    this._userInterfaceState.next({
      ...this._cloneState(),
      ...userInterfaceStateValue,
    });
  }

  openSidenav(): void {
    this._updateState({ sidenavOpened: true });
  }

  closeSidenav(): void {
    this._updateState({ sidenavOpened: false });
  }

  toggleSidenav(): void {
    this._updateState({
      sidenavOpened: !this._cloneState().sidenavOpened,
    });
  }

  openLoader(): void {
    this._updateState({
      loading: true,
    });
  }

  closeLoader(): void {
    this._updateState({
      loading: false,
    });
  }
}
