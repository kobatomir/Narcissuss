import {Directive, HostListener, inject, Input} from '@angular/core';
import {DialogRef} from '@modules/dialog/DialogRef';

@Directive({
  selector: '[dialogClose]'
})
export class DialogCloseDirective<T=any>{

  private  dialogRef= inject<DialogRef<T>>(DialogRef,{optional:true});

  @Input({ required:false,alias:'dialogClose'})
  result?:T|undefined=undefined;

  @HostListener("click")
  onClick(){
    if(!this.dialogRef){
     return;
    }

    this.dialogRef.close(this.result);
  }

}
