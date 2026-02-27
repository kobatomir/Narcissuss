import {Injectable, Injector, EnvironmentInjector, Type, signal, computed} from '@angular/core';
import {DialogRef} from '@modules/dialog/DialogRef';
import {DIALOG_DATA} from '@modules/dialog/InjectionToken';


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

  private _dialogs = signal<DialogInstance[]>([]);
  dialogs = computed(() => this._dialogs());

  constructor(
    private injector: Injector,
    private envInjector: EnvironmentInjector
  ) {
  }

  open<T, D = any>(
    component: Type<any>,
    config?: DialogConfig<D>
  ): DialogRef<T> {

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

  closeAll() {
    this._dialogs().forEach(d => d.dialogRef.close());
  }
}
