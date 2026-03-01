import {Injectable, signal} from '@angular/core';
import {AgencyEntity} from './AgencyEntity';

@Injectable({providedIn: 'root'})
export class AgencyService {

  data = signal<AgencyEntity[]>([{
    id:'12',
    name:'ces',
    source:'http://www.baidu.com',
    target:'http://www.cdruikun.com',
    remark:"ces",
    enabled:false,
  },
    {
      id:'12',
      name:'ces',
      source:'http://www.baidu.com',
      target:'http://www.cdruikun.com',
      remark:"ces",
      enabled:false,
    },
    {
      id:'12',
      name:'ces',
      source:'http://www.baidu.com',
      target:'http://www.cdruikun.com',
      remark:"ces",
      enabled:false,
    }
  ]);


}
