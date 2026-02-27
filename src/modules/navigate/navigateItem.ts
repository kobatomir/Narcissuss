import {Component, Input} from '@angular/core';
import {NavigateInfo} from '@modules/navigate/NavigateInfo';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'navigate-item',
  template: `
    <div class="navigate-item transition-2 flex-align" [routerLink]="data.route" routerLinkActive="active">
      <span class="icon flex-center" [style.margin-left.px]="level*30+10" >
        <i class="{{data.icon}} flex-center"></i>
      </span>
      <span>{{ data.name }}</span>
    </div>
    @if (data.children.length > 0) {
      @for (i of data.children; track $index) {
        <navigate-item [data]="i" [level]="level+1"/>
      }
    }
  `,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styles: [`
    .navigate-item {
      font-size: 14px;
      font-weight: 400;
      min-height: 40px;
      color: rgb(50, 49, 48);
      text-decoration: none;
      cursor: pointer;
      width: 220px;
      margin: 6px 8px;
      border-radius: 4px;
      position: relative;

      .icon{
        width: 30px;
      }

      &:hover {
        background-color: rgb(232, 232, 232);
      }
      &.active{
        background-color:rgb(255,255,255) ;
        box-shadow:  0 1.6px 3.6px 0 rgba(0, 0, 0, 0.133) ,  0 0.3px 0.9px 0 rgba(0, 0, 0, 0.11);
        &::after{
           content: ' ';
           background-color: var(--main-color);
           position: absolute;
           height: 50%;
           width: 3px;
           border-radius: 1.5px;
           left: 1px;
        }
        .icon{
          color: var(--main-color);
        }
      }
    }
  `]
})
export class NavigateItem{

  @Input()
  data!:NavigateInfo;

  @Input()
  level:number=0;
}
