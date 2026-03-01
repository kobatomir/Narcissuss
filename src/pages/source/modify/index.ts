import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DIALOG_DATA} from '@modules/dialog/InjectionToken';
import {ActionButton} from '@modules/components';
import {SourceApi, SourceTransfer} from '../common';
import {DialogRef} from '@modules/dialog/DialogRef';
import {DialogCloseDirective} from '@modules/dialog';

@Component({
  selector: 'source-modify',
  templateUrl: 'index.html',
  imports: [
    ReactiveFormsModule,
    ActionButton,
    DialogCloseDirective
  ],
  styleUrl: 'index.scss'
})
export class SourceModify{

  form?: FormGroup;

  data:SourceTransfer = inject(DIALOG_DATA);

  constructor(private formBuilder: FormBuilder,
              private service:SourceApi,
              private ref:DialogRef<boolean>) {
    this.build();
  }

  build(){
    this.form = this.formBuilder.group({
      name:[this.data?.name,Validators.required],
      source:[this.data?.source,Validators.required],
      description:[this.data?.description??''],
      type:[this.data?.type],
      id:[this.data?.id]
    })
  }

  async submit(){
    const x=  this.form?.value;
    x.type=parseInt(x.type);
    const result=this.data?await this.service.update(x) : await this.service.create(x);
    this.ref.close(result);
  }
}
