import {Component} from '@angular/core';
import {MonacoEditorModule} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';

@Component({
  selector:'source-detail',
  templateUrl:'index.html',
  styleUrl:'index.scss',
  imports: [MonacoEditorModule, FormsModule]
})
export class SourceDetail{
  options = {
    theme: 'vs-light',
    language: 'javascript',
    automaticLayout: true,
    readOnly: true,
  };

  code:string=` alert(1);`;
}
