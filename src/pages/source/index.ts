import {Component} from '@angular/core';
import {SourceList} from './list';
import {SourceApi} from './common';
import {SourceDetail} from './detail';

@Component({
  selector: 'source-host',
  imports: [
    SourceList,
    SourceDetail
  ],
  template: `
    <div class="flex full source-host">
      <source-list />
      <div class="flex-1 border-box detail">
         <source-detail />
      </div>
    </div>
  `,
  styles: [`
    .detail {
      padding:5px 0 0 20px;
    }
    .source-host{
      border-radius: 8px;
    }
  `]
})
export class SourceHost{

}
