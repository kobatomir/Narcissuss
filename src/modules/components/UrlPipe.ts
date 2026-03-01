import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name:'urlSecure'
})
export class UrlPipe  implements PipeTransform {

     constructor(public sanitizer: DomSanitizer) {
     }

    transform(value: any, ...args: any[]) {
       return  this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }

}
