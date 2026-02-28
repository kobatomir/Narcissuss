import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {NgxMonacoEditorConfig, provideMonacoEditor} from 'ngx-monaco-editor-v2';

export const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: window.location.origin + "/assets/monaco/min/vs",
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => { console.log((<any>window).monaco); }, // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
  requireConfig: { preferScriptTags: true }, // allows to oweride configuration passed to monacos loader
  monacoRequire: (<any>window).monacoRequire // pass here monacos require function if you loaded monacos loader (loader.js) yourself
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideMonacoEditor(monacoConfig),
  ]
};
