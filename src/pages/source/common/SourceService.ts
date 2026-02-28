import {Injectable} from '@angular/core';
import {SourceCreator, SourceQuery, SourceTransfer} from './SourceCreator';
import {HttpClient} from '@angular/common/http';
import {IResultModel} from '@modules/model';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService{

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
}
