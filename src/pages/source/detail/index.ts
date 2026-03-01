import {Component, computed} from '@angular/core';
import {MonacoEditorModule} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {SourceService} from '../common/SourceService';
import {DatePipe} from '@angular/common';
import {ActionButton, AnimatedTab, UrlPipe} from '@modules/components';



@Component({
  selector:'source-detail',
  templateUrl:'index.html',
  styleUrl:'index.scss',
  imports: [MonacoEditorModule, FormsModule, DatePipe, UrlPipe, AnimatedTab, ActionButton]
})
export class SourceDetail{

    constructor(public  service:SourceService) {
    }

    protected readonly window = window;
    protected readonly navigator = navigator;


}
