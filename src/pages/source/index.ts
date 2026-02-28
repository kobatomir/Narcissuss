import {Component} from '@angular/core';
import {SourceList} from './list';

@Component({
  selector: 'source-host',
  imports: [
    SourceList
  ],
  template: `
    <source-list />
  `
})
export class SourceHost{

}
