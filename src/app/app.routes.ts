import { Routes } from '@angular/router';
import {FrameComponent} from '@modules/frame';
import {pageRoutes} from '../pages';

export const routes: Routes = [{
  path:'',
  component:FrameComponent,
  children:pageRoutes
}];
