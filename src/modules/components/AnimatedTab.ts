import {Component, EventEmitter, Input, Output, signal} from '@angular/core';

@Component({
  selector:'animated-tab',
  template:`
    <div class="animation-tab flex-align">
      @for(l of Tabs;track l){
       <div class="tab-item flex-center"
            on-click="click($index)"
            [class.active]="$index==Index">
         {{l}}
       </div>
      }
      <div class="indicator" [style.transform]="'translateX('+50*Index+'px)'">

      </div>
    </div>
  `,
  styles:[
    ` .animation-tab {
       min-height: 28px;
      position: relative;

      .tab-item {
        width: 50px;
        cursor: pointer;
        font-size: 12px;
        color: #aaa;
        &.active{
          color:#333;
        }
      }
      .indicator{
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 50px;
        background-color: #1976d2;
        transition: transform .3s cubic-bezier(.4,0,.2,1) ,
                     width .3s cubic-bezier(.4,0,.2,1) ;
      }
    }
    `
  ]
})
export class AnimatedTab{

  @Input()
  Tabs:string[]=[];

  click(i:number){
    this.IndexChange.next(i);
  }

   @Input()
   Index:number=0;

   @Output()
   IndexChange:EventEmitter<number> = new EventEmitter();
}
