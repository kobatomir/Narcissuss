import {Component, inject, OnInit, signal} from '@angular/core';
import {DIALOG_DATA} from '@modules/dialog/InjectionToken';
import {MonacoOptions, SourceApi, SourceEntity} from '../common';
import {ActionButton, AnimatedTab} from '@modules/components';
import {EditorComponent} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {DialogCloseDirective} from '@modules/dialog';

@Component({
  selector: 'source-code',
  templateUrl: 'index.html',
  imports: [
    AnimatedTab,
    EditorComponent,
    FormsModule,
    ActionButton,
    DialogCloseDirective
  ],
  styleUrl: 'index.scss'
})
export class SourceCode implements OnInit {

   id:string = inject(DIALOG_DATA);

   constructor(private api: SourceApi) {
   }

   async ngOnInit() {
     await this.query();
   }

   monacoOption= MonacoOptions.Writeable;

   index = signal(0);

   data = signal<SourceEntity|null>(null);

   async query(){
     const data= await this.api.find(this.id);
     this.data.set(data);
     this.code= [data?.style??'',data?.script??''];
   }

   code:string[]=['',''];

  async  save(){
      if(this.data()?.id == undefined) return;
      const d= await this.api.code({
        id:this.data()!.id,
        style:this.code[0],
        script:this.code[1]
      })
     if(d) await this.query();
   }

   clear(){
      this.code[this.index()]='';
   }

   reset(){
     this.code= [this.data()?.style??'',this.data()?.script??''];
   }
    async  copy(){
     await window.navigator.clipboard.writeText( this.code[this.index()]);
   }
}
