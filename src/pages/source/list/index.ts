import {Component, OnInit, signal} from '@angular/core';
import {ActionButton} from '@modules/components';
import {DialogService} from '@modules/dialog';
import {SourceModify} from '../modify';
import {SourceQuery, SourceApi} from '../common';
import {queue} from 'rxjs';
import {SourceService} from '../common/SourceService';
import {MenuManager} from '@modules/utils';
import {SourceCode} from '../code';

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

   code(data:SourceQuery){
     this.dialog.open(SourceCode,{disableClose:true,data:data.id});
   }

   async query(){
     const data= await this.api.query();
     this.data.set(data);
   }

   async detail(id:string){
     await this.service.detail(id);
   }

   link(data:SourceQuery){
     window.open(data.source);
   }

   menu(data:SourceQuery,event:MouseEvent){
      MenuManager.ResignMenu([
        {
          icon:'icon-edit_24',
          name:"编辑",
          action:()=> this.edit(data),
        },{
           icon:'icon-code_24',
          name:"脚本",
          action:()=> this.code(data),
        }
        ,{
          icon:'icon-archive_28',
          name:"详情",
          action:()=> this.detail(data.id),
        }
      ],event);
   }
}
