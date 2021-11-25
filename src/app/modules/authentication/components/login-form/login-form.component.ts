import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  handleLogin(): void {
    this._authenticationService.login('John Doe');
  }
}
