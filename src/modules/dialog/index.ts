import {
  Injectable,
  Injector,
  EnvironmentInjector,
  Type,
  signal,
  computed,
  ComponentRef,
  ApplicationRef, createComponent
} from '@angular/core';
import {DialogRef} from '@modules/dialog/DialogRef';
import {DIALOG_DATA} from '@modules/dialog/InjectionToken';
import {DialogContainer} from '@modules/dialog/DialogContainer';


interface DialogInstance {
  id: number;
  component: Type<any>;
  dialogRef: DialogRef<any>;
  injector: Injector;
  config?: DialogConfig;
}

export interface DialogConfig<D = any> {
  data?: D;
  disableClose?: boolean;
}

@Injectable({providedIn: 'root'})
export class DialogService {

  private idCounter = 0;
  private  hostRef?:ComponentRef<DialogContainer>;

  private _dialogs = signal<DialogInstance[]>([]);
  dialogs = computed(() => this._dialogs());

  constructor(
    private injector: Injector,
    private envInjector: EnvironmentInjector,
    private appRef:ApplicationRef
  ) {
  }

  public open<T, D = any>(
    component: Type<any>,
    config?: DialogConfig<D>
  ): DialogRef<T> {
   this.ensureHost();
    const dialogRef = new DialogRef<T>();

    const id = this.idCounter++;

    const customInjector = Injector.create({
      providers: [
        {provide: DialogRef, useValue: dialogRef},
        {provide: DIALOG_DATA, useValue: config?.data}
      ],
      parent: this.injector
    });

    const instance: DialogInstance = {
      id,
      component,
      dialogRef,
      injector: customInjector,
      config
    };

    this._dialogs.update(d => [...d, instance]);

    dialogRef.afterClosed$.subscribe(() => {
      this._dialogs.update(d => d.filter(x => x.id !== id));
    });

    return dialogRef;
  }

   public closeAll() {
    this._dialogs().forEach(d => d.dialogRef.close());
  }

  private  ensureHost(){
    if(this.hostRef) return;
    this.hostRef = createComponent(DialogContainer,{
      environmentInjector: this.envInjector
    })
    this.appRef.attachView(this.hostRef.hostView);
    document.body.appendChild(this.hostRef.location.nativeElement);
  }
}
