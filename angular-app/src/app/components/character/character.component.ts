import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
  private charactersSubscription: Subscription = new Subscription;
  public characters:any;

  constructor(
    private character: CharacterService
  ){}

  ngOnInit(): void {
    this.getCharacters()
  }

  ngOnDestroy(): void {
    this.charactersSubscription.unsubscribe()
  }

  public getCharacters(){
    this.charactersSubscription = this.character.getCharacters().subscribe((data: any[]) => {
        this.characters = data;
    });
  }
  titulo = 'Este es mi primer componente en Angular';
}