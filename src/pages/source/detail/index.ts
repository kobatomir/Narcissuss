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
    theme: 'vs-dark',
    language: 'javascript',
    automaticLayout: true,
  };

  code:string=` alert(1);`;
}
