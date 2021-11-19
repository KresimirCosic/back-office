import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 } from 'uuid';

import { APIService } from './api.service';
import { IAuthenticationState } from '../models/state/authentication-state.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends APIService {
  private readonly _authenticationState =
    new BehaviorSubject<IAuthenticationState>({
      username: '',
      APIrequests: [],
    });
  readonly authenticationState$ = this._authenticationState.asObservable();

  constructor() {
    super();
  }

  login(username: string): void {
    // todo
    const newRequestID: string = v4();

    this._authenticationState.next({
      ...this._authenticationState.getValue(),
      APIrequests: [newRequestID],
    });

    setTimeout(() => {
      this._authenticationState.next({
        ...this._authenticationState.getValue(),
        username,
        APIrequests: [
          ...this._authenticationState
            .getValue()
            ['APIrequests'].filter((requestID) => requestID !== newRequestID),
        ],
      });
    }, 1000);
  }

  logout(): void {
    this._authenticationState.next({
      ...this._authenticationState.getValue(),
      username: '',
    });
  }
}
