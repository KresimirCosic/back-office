import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IUserInterfaceState } from '../models/state/user-interface-state.model';

@Injectable({
  providedIn: 'root',
})
export class UserInterfaceService {
  private readonly _userInterfaceState =
    new BehaviorSubject<IUserInterfaceState>({ loading: false });
  readonly userInterfaceState$ = this._userInterfaceState.asObservable();

  constructor() {}
}
