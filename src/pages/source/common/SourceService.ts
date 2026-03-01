import {Injectable, signal} from '@angular/core';
import {SourceEntity} from './SourceEntity';
import {SourceApi} from './SourceApi';

@Injectable({providedIn: 'root'})
export class SourceService {

  private currentId:string|null = null;

  public detailData = signal<SourceEntity|null>(null);

  public detailType= signal(2);

  constructor(private  api:SourceApi) {
  }

  public monacoOptions=[
    {
      automaticLayout:true,
      theme:'vs-light',
      language:'javascript',
      readOnly:true,
    },
    {
      automaticLayout:true,
      theme:'vs-light',
      language:'css',
      readOnly:true,
    }
  ]

  public async detail(id:string) {
    if(this.currentId==id)return;
    const data= await this.api.find(id);
    if(data==null) return;
    this.detailData.set(data);
    this.currentId=id;
  }
}
