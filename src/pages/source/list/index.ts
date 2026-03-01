import {Component, OnInit, signal} from '@angular/core';
import {ActionButton} from '@modules/components';
import {DialogService} from '@modules/dialog';
import {SourceModify} from '../modify';
import {SourceQuery, SourceApi} from '../common';
import {queue} from 'rxjs';
import {SourceService} from '../common/SourceService';

@Component({
  selector: 'source-list',
  templateUrl: './index.html',
  imports: [
    ActionButton
  ],
  styleUrl: 'index.scss'
})
export class SourceList implements OnInit {

  data = signal<SourceQuery[]>([]);

  constructor(private dialog:DialogService,
              private api:SourceApi,
              private service:SourceService
              ) {
  }

   async ngOnInit() {
        await this.query();
    }

   create(){
     this.dialog.open(SourceModify,{disableClose:true})
       .afterClosed$.subscribe(s=> s?this.query():null);
   }

   edit(data:SourceQuery){
     this.dialog.open(SourceModify,{disableClose:true,data:data})
      .afterClosed$.subscribe(s=> s?this.query():null);
   }

   async query(){
     const data= await this.api.query();
     this.data.set(data);
   }

   async detail(id:string){
     await this.service.detail(id);
   }
}
