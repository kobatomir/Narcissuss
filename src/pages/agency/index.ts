import {Component} from '@angular/core';
import {AgencyTable} from './table';

@Component({
  selector: 'agency-host',
  imports: [
    AgencyTable
  ],
  template: `
    <agency-table />`
})
export class AgencyHost {

}
