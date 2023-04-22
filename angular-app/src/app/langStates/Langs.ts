import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import { Subscription } from 'rxjs';
import langStates from './langStates';

export class Langs implements OnInit, OnDestroy {
  protected langSubscription: Subscription = new Subscription;
  public loading = true;
  public langActor:string | any;
  public langHouse:string | any;

  constructor(
    protected langService: LangService,
    protected changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getLang()
  }

  public getLang() {
    this.langSubscription = this.langService.lang$.subscribe(lang => {
      const { langActor, langHouse } = langStates(lang);
      this.langActor = langActor;
      this.langHouse = langHouse;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.langSubscription.unsubscribe();
  }
}