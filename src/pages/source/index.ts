import {Component} from '@angular/core';
import {SourceList} from './list';
import {SourceService} from './common';
import {SourceDetail} from './detail';

@Component({
  selector: 'source-host',
  imports: [
    SourceList,
    SourceDetail
  ],
  template: `
    <div class="flex full">
      <source-list />
      <div class="flex-1">
         <source-detail />
      </div>
    </div>

  `
})
export class SourceHost{

}
