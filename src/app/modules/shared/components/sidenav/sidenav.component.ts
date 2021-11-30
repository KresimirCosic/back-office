import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IAuthenticationState } from '../../../../models/state/authentication-state.model';

import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  authenticationState$: Observable<IAuthenticationState>;

  constructor(private _authenticationService: AuthenticationService) {
    this.authenticationState$ =
      this._authenticationService.authenticationState$;
  }

  ngOnInit(): void {}

  handleLogout(): void {
    this._authenticationService.logout();
  }
}
