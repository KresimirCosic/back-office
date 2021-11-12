import { Component } from '@angular/core';

import { UserInterfaceService } from './services/user-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userInterfaceState$ = this._userInterfaceService.userInterfaceState$;

  constructor(private _userInterfaceService: UserInterfaceService) {}
}
