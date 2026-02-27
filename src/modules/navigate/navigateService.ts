import {Injectable, signal} from '@angular/core';
import {NavigateInfo} from '@modules/navigate/NavigateInfo';

@Injectable()
export class NavigateService{

  data = signal<NavigateInfo[]>([]);

  query(){
    const data: NavigateInfo[]=[
      {
        icon:'icon-app_recent_24',
        name:'数据源',
        route:'/source',
        children:[]
      },
      {
        icon:'icon-play_24',
        name:'播放',
        route:'/inventory',
        children:[]
      },
      {
        icon:'icon-tag_24',
        name:'代理',
        route:'/agent',
        children:[]
      }
    ];
    this.data.set(data);
  }

}
