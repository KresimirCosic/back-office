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

  private cloneState(): IAuthenticationState {
    return cloneDeep(this._authenticationState.getValue());
  }

  private removeAPIRequestID(newAPIRequestID: string): string[] {
    return this.cloneState()['APIRequests'].filter(
      (APIRequestID) => APIRequestID !== newAPIRequestID
    );
  }

  public login(username: string): void {
    const newAPIRequestID: string = v4();

    this._authenticationState.next({
      ...this.cloneState(),
      APIRequests: [newAPIRequestID],
    });

    setTimeout(() => {
      this._authenticationState.next({
        username,
        APIRequests: this.removeAPIRequestID(newAPIRequestID),
      });
    }, this.fakeAPIRequestDuration);
  }

  public logout(): void {
    const newAPIRequestID: string = v4();

    this._authenticationState.next({
      ...this.cloneState(),
      APIRequests: [newAPIRequestID],
    });

    setTimeout(() => {
      this._authenticationState.next({
        username: '',
        APIRequests: this.removeAPIRequestID(newAPIRequestID),
      });
    }, this.fakeAPIRequestDuration);
  }
}
