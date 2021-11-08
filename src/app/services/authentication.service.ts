import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IEmployee } from '../models/Employee.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly _employee = new BehaviorSubject<IEmployee>({ username: '' });
  readonly employee$ = this._employee.asObservable();

  constructor() {}

  login(username: string): void {
    this._employee.next({ username });
  }

  logout(): void {
    this._employee.next({ username: '' });
  }
}
