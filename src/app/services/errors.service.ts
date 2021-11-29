import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 } from 'uuid';
import { cloneDeep } from 'lodash';

import { IErrorsState, IError } from '../models/state/errors-state.model';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  private readonly _errorsState = new BehaviorSubject<IErrorsState>({
    errors: [],
  });
  readonly errorsState$ = this._errorsState.asObservable();
  readonly errorDisplayDuration: number = 2000;

  constructor() {}

  private _cloneState(): IErrorsState {
    return cloneDeep(this._errorsState.getValue());
  }

  private _updateState(newErrorsState: IErrorsState) {
    this._errorsState.next({
      ...newErrorsState,
    });
  }

  createNewError(message: string): void {
    const newErrorID: string = v4();
    const newError: IError = { id: newErrorID, message };

    this._updateState({
      errors: [...this._cloneState().errors, newError],
    });

    setTimeout(() => {
      this.removeError(newErrorID);
    }, this.errorDisplayDuration);
  }

  removeError(errorID: string): void {
    this._updateState({
      errors: [
        ...this._cloneState().errors.filter((error) => error.id !== errorID),
      ],
    });
  }
}
