import {Component, Input} from '@angular/core';

@Component({
  selector:'action-button',
  template:`
   <button class="action-button">
       <i class="flex-center icon-{{icon}}"></i>
   </button>
  `,
  styles:[`
    .action-button{
       width: max(28px,1.45vw);
       height: max(28px,1.45vw);
       background-color: transparent;
       outline: none;
       border: none;
      transition:all 0.2s;
       color: var(--main-color);
       &:hover{
         color: red;
       }
    }
  `]
})
export class ActionButton {
   @Input()
   icon:string='tag_24';
}
