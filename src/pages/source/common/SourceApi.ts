import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResultModel} from '@modules/model';
import {firstValueFrom} from 'rxjs';
import {SourceCreator} from './SourceCreator';
import {SourceTransfer} from './SourceTransfer';
import {SourceQuery} from './SourceQuery';
import {SourceEntity} from './SourceEntity';
import {ISourceCode} from './SourceCode';

@Injectable({
  providedIn: 'root'
})
export class SourceApi {

  private url="/api/Source";

  constructor(private http: HttpClient) {}

  public async create(data:SourceCreator){
     const result= await  firstValueFrom(this.http.post<IResultModel>(this.url,data));
     return result.success;
  }

  public async update(data:SourceTransfer){
    const result= await  firstValueFrom(this.http.put<IResultModel>(this.url,data));
    return result.success;
  }

  public async query(){
    const result= await firstValueFrom(this.http.get<IResultModel<SourceQuery[]>>(this.url));
    return result?.success?result.data:[];
  }

  public async find(id:string){
    const result= await firstValueFrom(this.http.get<IResultModel<SourceEntity>>(`${this.url}/${id}`));
    return result?.success?result.data:null;
  }

  public async code(data:ISourceCode){
    const result= await  firstValueFrom(this.http.put<IResultModel>(this.url+'/code',data));
    return result.success;
  }
}
