import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 } from 'uuid';
import { cloneDeep } from 'lodash';

import { APIService } from './api.service';
import { IAuthenticationState } from '../models/state/authentication-state.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends APIService {
  private readonly _authenticationState =
    new BehaviorSubject<IAuthenticationState>({
      username: '',
      APIRequests: [],
    });
  readonly authenticationState$ = this._authenticationState.asObservable();

  constructor() {
    super();
  }

  private _cloneState(): IAuthenticationState {
    return cloneDeep(this._authenticationState.getValue());
  }

  private _updateState(
    authenticationStateValue: Partial<IAuthenticationState>
  ): void {
    this._authenticationState.next({
      ...this._cloneState(),
      ...authenticationStateValue,
    });
  }

  private _removeAPIRequestID(newAPIRequestID: string): string[] {
    return this._cloneState()['APIRequests'].filter(
      (APIRequestID) => APIRequestID !== newAPIRequestID
    );
  }

  public login(username: string): void {
    const newAPIRequestID: string = v4();

    this._updateState({ APIRequests: [newAPIRequestID] });

    setTimeout(() => {
      this._updateState({
        username,
        APIRequests: this._removeAPIRequestID(newAPIRequestID),
      });
    }, this.fakeAPIRequestDuration);
  }

  public logout(): void {
    const newAPIRequestID: string = v4();

    this._updateState({ APIRequests: [newAPIRequestID] });

    setTimeout(() => {
      this._updateState({
        username: '',
        APIRequests: this._removeAPIRequestID(newAPIRequestID),
      });
    }, this.fakeAPIRequestDuration);
  }
}
