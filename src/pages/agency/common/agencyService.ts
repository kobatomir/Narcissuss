import {Injectable, signal} from '@angular/core';
import {AgencyEntity} from './AgencyEntity';
import {AgencyApi} from './AgencyApi';

@Injectable({providedIn: 'root'})
export class AgencyService {

  data = signal<AgencyEntity[]>([]);

  constructor(private api:AgencyApi) {
  }

  query(){

  }

}
