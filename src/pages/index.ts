import {Routes} from '@angular/router';
import {SourceHost} from './source';
import {AgencyHost} from './agency';
import {SubjectHost} from './subject';


export const pageRoutes:Routes= [
  {
    path:'source',
    component: SourceHost
  },
  {
    path:'agency',
    component: AgencyHost
  },
  {
    path:'subject',
    component: SubjectHost
  }
];
