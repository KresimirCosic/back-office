import { Component, OnInit, Input } from '@angular/core';

import { IError } from '../../../../models/state/errors-state.model';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent implements OnInit {
  @Input() errors: IError[] = [];

  constructor() {}

  ngOnInit(): void {}
}
