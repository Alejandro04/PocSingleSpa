import { Component, OnInit, OnDestroy, OnChanges, ChangeDetectorRef } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Subscription } from 'rxjs';
import { Character } from './character.interface';
import { Langs } from 'src/app/langStates/Langs';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent extends Langs implements OnInit, OnChanges, OnDestroy {
  public charactersSubscription: Subscription = new Subscription;
  public characters:Character[] = [];
  public loading = true;

  constructor(
    private characterService: CharacterService,
    langService: LangService,
    changeDetectorRef: ChangeDetectorRef
  ){
    super(langService, changeDetectorRef);
  }
  
  ngOnInit(): void {
    this.getCharacters()
    super.ngOnInit();
  }

  ngOnChanges(): void {
    this.getLang()
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
    super.ngOnDestroy();
  }
}