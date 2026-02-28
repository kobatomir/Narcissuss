import {Component} from '@angular/core';
import {ActionButton} from '@modules/components';
import {DialogService} from '@modules/dialog';
import {SourceModify} from '../modify';

@Component({
  selector: 'source-list',
  templateUrl: './index.html',
  imports: [
    ActionButton
  ],
  styleUrl: 'index.scss'
})
export class SourceList{

  constructor(private dialog:DialogService) {
  }

  create(){
     this.dialog.open(SourceModify);
  }
}
