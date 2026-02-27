import { Subject } from 'rxjs';
import { signal } from '@angular/core';

export class DialogRef<T = any> {

  private _afterClosed = new Subject<T | undefined>();
  private _closed = signal(false);

  afterClosed$ = this._afterClosed.asObservable();
  closed = this._closed.asReadonly();

  close(result?: T) {
    if (this._closed()) return;
    this._closed.set(true);
    this._afterClosed.next(result);
    this._afterClosed.complete();
  }
}
