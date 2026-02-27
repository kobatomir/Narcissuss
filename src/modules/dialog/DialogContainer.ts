import {Component, inject} from '@angular/core';
import {DialogService} from '@modules/dialog/index';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'dialog-container',
  template: `
    @for (dialog of dialogService.dialogs(); track dialog.id) {
      <div class="backdrop" [style.z-index]="1000+ dialog.id*2" on-click="onBackdropClick(dialog)"></div>
      <div class="dialog" [style.z-index]="1001+ dialog.id*2">
        <ng-container *ngComponentOutlet="dialog.component;injector:dialog.injector"></ng-container>
      </div>
    }

  `,
  imports: [
    NgComponentOutlet
  ],
  styles: [
    `
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, .5);
      }

      .dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 24px;
        border-radius: 8px;
        min-width: 300px;
      }
    `
  ]
})
export class DialogContainer{

  dialogService= inject(DialogService);

  onBackdropClick(dialog:any){
    if(!dialog.config?.disableClose){
      dialog.dialogRef.close();
    }
  }
}
