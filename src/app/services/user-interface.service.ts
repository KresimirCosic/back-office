import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IUserInterfaceState } from '../models/state/user-interface-state.model';

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

  constructor() {}

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
