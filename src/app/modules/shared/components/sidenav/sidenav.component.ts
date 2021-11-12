import { Component, OnInit } from '@angular/core';

import { UserInterfaceService } from '../../../../services/user-interface.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  userInterfaceState$ = this._userInterfaceService.userInterfaceState$;

  constructor(private _userInterfaceService: UserInterfaceService) {}

  ngOnInit(): void {}
}
