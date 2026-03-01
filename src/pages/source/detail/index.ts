import {Component} from '@angular/core';
import {MonacoEditorModule} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {SourceService} from '../common/SourceService';
import {DatePipe} from '@angular/common';


@Component({
  selector:'source-detail',
  templateUrl:'index.html',
  styleUrl:'index.scss',
  imports: [MonacoEditorModule, FormsModule, DatePipe]
})
export class SourceDetail{

    constructor(public  service:SourceService) {
    }

    monacoOption={
      automaticLayout:true,
      theme:'vs-light',
      language:'javascript',
      readOnly:true,
    }

}
