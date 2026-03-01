import {Injectable, signal} from '@angular/core';
import {SourceEntity} from './SourceEntity';
import {SourceApi} from './SourceApi';
import {MonacoOptions} from './MonacoOptions';

@Injectable({providedIn: 'root'})
export class SourceService {

  public detailData = signal<SourceEntity|null>(null);

  public detailType= signal(2);

  constructor(private  api:SourceApi) {
  }

  public monacoOptions= MonacoOptions.ReadOnly;

  public async detail(id:string) {
    const data= await this.api.find(id);
    if(data==null) return;
    this.detailData.set(data);
  }
}
