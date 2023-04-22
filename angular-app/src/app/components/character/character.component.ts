import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Subscription } from 'rxjs';
import { Character } from './character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
  private charactersSubscription: Subscription = new Subscription;
  public characters:Character[] = [];
  public loading = true;

  constructor(
    private character: CharacterService
  ){}

  ngOnInit(): void {
    this.getCharacters()
  }

  ngOnDestroy(): void {
   // this.charactersSubscription.unsubscribe()
  }

  public getCharacters(){
     this.charactersSubscription = this.character.getCharacters().subscribe(
      (characters) => {
        this.characters = characters;
        this.loading = false;
      },
      (error) => {
        //
      }
    );
  }
}