import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { IAuthenticationState } from '../models/state/authentication-state.model';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AnonymityGuard implements CanActivate {
  authenticationState$: Observable<IAuthenticationState>;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {
    this.authenticationState$ =
      this._authenticationService.authenticationState$;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let allowRouteActivation: boolean = false;

    this.authenticationState$.subscribe((observer) => {
      allowRouteActivation = observer.username ? false : true;

      allowRouteActivation ? null : this._router.navigateByUrl('/products');
    });

    return allowRouteActivation;
  }
}
