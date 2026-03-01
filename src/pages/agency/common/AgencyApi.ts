import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {firstValueFrom} from 'rxjs';
import {IResultModel} from '@modules/model';
import {AgencyEntity} from './AgencyEntity';
import {AgencyCreator} from './AgencyCreator';

@Injectable({providedIn: 'root'})
export class AgencyApi{
  private url="/api/agency";

  constructor(private http: HttpClient) {}

  public async create(data:AgencyCreator){
    const result= await  firstValueFrom(this.http.post<IResultModel>(this.url,data));
    return result.success;
  }

  public async update(data:AgencyEntity){
    const result= await  firstValueFrom(this.http.put<IResultModel>(this.url,data));
    return result.success;
  }

  public async query(){
    const result= await firstValueFrom(this.http.get<IResultModel<AgencyEntity[]>>(this.url));
    return result?.success?result.data:[];
  }
}
