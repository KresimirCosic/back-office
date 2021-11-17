import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  authenticationState$ = this._authenticationService.authenticationState$;

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  handleLogout(): void {
    this._authenticationService.logout();
  }
}
