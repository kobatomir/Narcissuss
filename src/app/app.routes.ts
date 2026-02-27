import { Routes } from '@angular/router';
import {FrameComponent} from '@modules/frame';

export const routes: Routes = [{
  path:'',
  component:FrameComponent,
  children:[]
}];
