import {Component} from '@angular/core';
import {Header} from './header';
import {RouterOutlet} from '@angular/router';
import {NavigateView} from '@modules/navigate';

@Component({
  selector: 'frame-component',
  imports: [
    Header,
    RouterOutlet,
    NavigateView
  ],
  template: `
    <div class="full">
      <frame-header />
      <div class="frame-container">
             <navigate-view />
            <router-outlet />
      </div>
    </div>
  `,
  styles:[`
   .frame-container {
     width: 100%;
     height: calc(100% - 2.5vw);
     overflow: hidden;
     background-color: rgb(242, 242, 242);
   }
  `]
})
export class  FrameComponent{

}
