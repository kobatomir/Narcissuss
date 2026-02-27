import {Component} from '@angular/core';
import {NavigateItem} from '@modules/navigate/navigateItem';
import {NavigateService} from '@modules/navigate/navigateService';

@Component({
  selector: 'navigate-view',
  imports: [
    NavigateItem
  ],
  providers:[NavigateService],
  template: `
    <div>
      @for (d of data(); track $index) {
            <navigate-item [data]="d" [level]="0" />
          }
    </div>

  `
})
export class NavigateView {

  data;

   constructor(private service: NavigateService) {
     this.data= service.data;
     this.service.query();
   }

}
