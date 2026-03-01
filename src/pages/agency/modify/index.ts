import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AgencyEntity} from '../common';
import {DIALOG_DATA} from '@modules/dialog/InjectionToken';
import {AgencyApi} from '../common/AgencyApi';
import {DialogRef} from '@modules/dialog/DialogRef';
import {ActionButton} from '@modules/components';
import {DialogCloseDirective} from '@modules/dialog';

@Component({
  selector: 'agency-modify',
  templateUrl: 'index.html',
  imports: [
    ActionButton,
    DialogCloseDirective,
    ReactiveFormsModule
  ],
  styleUrl: 'index.scss'
})
export class AgencyModify{

  form?: FormGroup;

  data:AgencyEntity= inject(DIALOG_DATA);

  constructor(private formBuilder: FormBuilder,
              private api:AgencyApi,
              private ref:DialogRef<boolean>) {
     this.build();
  }
  build(){
    this.form = this.formBuilder.group({
      target:[this.data?.target,Validators.required],
      source:[this.data?.source,Validators.required],
      name:[this.data?.name??'',Validators.required],
      enabled:[this.data?.enabled],
      id:[this.data?.id],
      remark:[this.data?.remark]
    })
  }

  async submit(){
    const x=  this.form?.value;
    //const result=this.data?await this.service.update(x) : await this.service.create(x);
    this.ref.close();
  }
}
