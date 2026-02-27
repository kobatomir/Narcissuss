import {Component} from '@angular/core';

@Component({
  selector:"frame-header",
  template:`
  <div class="frame-header flex-align">
     <span class="link transition-2 flex-center"> 区域医学检验中心</span>
  </div>
  `,
  styles:[`
   .frame-header{
     width: 100%;
     height: max(48px,2.5vw);
     background-color: var(--main-color);
     .link{
       color: rgb(242, 242, 242);
       padding: 0 20px;
       height: 100%;
       cursor: pointer;
       &:hover{
         background-color: rgba(0,0,0,0.2);
       }
     }
   }
  `]
})
export class Header{

}
