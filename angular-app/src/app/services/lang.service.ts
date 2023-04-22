import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/*
  TODO: When the app navigate into the react app and the angular app
  the lang state is lost
*/

export class LangService {
  private langSubject: Subject<string> = new Subject<string>();
  public lang$: Observable<string> = this.langSubject.asObservable();
  public lang:string|any = localStorage.getItem('lang')

  constructor() {
    this.handleLangChanged = this.handleLangChanged.bind(this);
    window.addEventListener('langDataEvent', this.handleLangChanged);
  }

  public handleLangChanged(event: any) {
    const { lang } = event.detail;
    this.langSubject.next(lang ? lang:this.lang);
  }
}