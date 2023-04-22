import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  private langSubject: Subject<string> = new Subject<string>();
  public lang$: Observable<string> = this.langSubject.asObservable();

  constructor() {
    this.handleLangChanged = this.handleLangChanged.bind(this);
    window.addEventListener('langDataEvent', this.handleLangChanged);
  }

  public handleLangChanged(event: any) {
    const { lang } = event.detail;
    this.langSubject.next(lang);
  }
}