import { Component, OnInit } from '@angular/core';

import { UserInterfaceService } from '../../../../services/user-interface.service';

@Component({
  selector: 'app-sidenav-controls',
  templateUrl: './sidenav-controls.component.html',
  styleUrls: ['./sidenav-controls.component.scss'],
})
export class SidenavControlsComponent implements OnInit {
  userInterfaceState$ = this._userInterfaceService.userInterfaceState$;

  constructor(private _userInterfaceService: UserInterfaceService) {}

  ngOnInit(): void {}

  toggleSidenav(): void {
    this._userInterfaceService.toggleSidenav();
  }
}
