import {Component} from '@angular/core';
import {Header} from './header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'frame-component',
  imports: [
    Header,
    RouterOutlet
  ],
  template: `
    <div class="full">
      <frame-header />
      <div class="frame-container">
            <router-outlet />
      </div>
    </div>
  `,
  styles:[`
   .frame-container {
     width: 100%;
     height: calc(100% - 2.5vw);
     overflow: hidden;
   }
  `]
})
export class  FrameComponent{

}
