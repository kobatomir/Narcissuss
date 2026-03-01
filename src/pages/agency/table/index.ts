import {Component} from '@angular/core';
import {AgencyService} from '../common';

@Component({
  selector:'agency-table',
  templateUrl:'index.html',
  styleUrl:'index.scss'
})
export class AgencyTable{

  constructor(public service:AgencyService) {
  }
}
