import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IAuthenticationState } from '../models/state/authentication-state.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly _authenticationState =
    new BehaviorSubject<IAuthenticationState>({
      username: '',
    });
  readonly authenticationState$ = this._authenticationState.asObservable();

  constructor() {}

  login(username: string): void {
    this._authenticationState.next({ username });
  }

  logout(): void {
    this._authenticationState.next({ username: '' });
  }
}
