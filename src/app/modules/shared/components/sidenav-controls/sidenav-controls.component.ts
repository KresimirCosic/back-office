import { Component, OnInit } from '@angular/core';

import { UserInterfaceService } from 'src/app/services/user-interface.service';

@Component({
  selector: 'app-sidenav-controls',
  templateUrl: './sidenav-controls.component.html',
  styleUrls: ['./sidenav-controls.component.scss'],
})
export class SidenavControlsComponent implements OnInit {
  userInterfaceState$ = this._userInterfaceService.userInterfaceState$;

  constructor(private _userInterfaceService: UserInterfaceService) {}

  ngOnInit(): void {}

  handleOpeningSidenav(): void {
    this._userInterfaceService.openSidenav();
  }

  handleClosingSidenav(): void {
    this._userInterfaceService.closeSidenav();
  }
}
