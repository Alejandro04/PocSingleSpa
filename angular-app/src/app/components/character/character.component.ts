import { Component, OnInit, OnDestroy, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { LangService } from 'src/app/services/lang.service';
import { Subscription } from 'rxjs';
import { Character } from './character.interface';
import langStates from './langStates';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnChanges, OnDestroy {
  private charactersSubscription: Subscription = new Subscription;
  private langSubscription: Subscription = new Subscription;
  public characters:Character[] = [];
  public loading = true;
  public langActor:string | any;
  public langHouse:string | any;

  constructor(
    private characterService: CharacterService,
    private langService: LangService,
    private changeDetectorRef: ChangeDetectorRef
  ){
    this.getLang()
  }

  ngOnInit(): void {
    this.getCharacters()
    this.getLang()
  }

  ngOnChanges(): void {
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

  public getCharacters(){
     this.charactersSubscription = this.characterService.getCharacters().subscribe(
      (characters) => {
        this.characters = characters;
        this.loading = false;
      },
      (error) => {
        //
      }
    );
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe();
    this.langSubscription.unsubscribe();
  }
}