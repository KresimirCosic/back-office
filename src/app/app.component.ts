import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

import { UserInterfaceService } from './services/user-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _currentRoute: string;
  userInterfaceState$ = this._userInterfaceService.userInterfaceState$;

  constructor(
    private _router: Router,
    private _userInterfaceService: UserInterfaceService
  ) {
    this._currentRoute = '';
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // todo
      }

      if (event instanceof NavigationEnd) {
        this._userInterfaceService.closeSidenav();
        this._currentRoute = event.url;
      }

      if (event instanceof NavigationError) {
        this._userInterfaceService.closeSidenav();
        console.error(event.error);
        // todo
      }
    });
  }

  handleClosingSidenav(): void {
    this._userInterfaceService.closeSidenav();
  }
}
