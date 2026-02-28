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
      <div class="frame-container flex">
            <navigate-view />
            <div class="flex-1 content-container">
              <router-outlet />
            </div>
      </div>
    </div>
  `,
  styles:[`
   .frame-container {
     width: 100%;
     height: calc(100% - max(2.5vw,48px));
     overflow: hidden;
     background-color: rgb(242, 242, 242);
   }
   .content-container{
     padding:10px 20px 20px 20px;
   }
  `]
})
export class  FrameComponent{

}
