import {Component, OnInit} from '@angular/core';
import {AgencyService} from '../common';
import {ActionButton} from '@modules/components';
import {DialogService} from '@modules/dialog';
import {AgencyModify} from '../modify';

@Component({
  selector: 'agency-table',
  templateUrl: 'index.html',
  imports: [
    ActionButton
  ],
  styleUrl: 'index.scss'
})
export class AgencyTable implements OnInit {

  constructor(public service:AgencyService,
              private  dialog:DialogService) {
  }

  async ngOnInit() {
      await  this.service.query();
    }

  create(){
       this.dialog.open(AgencyModify,{disableClose:true})
         .afterClosed$.subscribe(s=>this.service.query());
  }
}
