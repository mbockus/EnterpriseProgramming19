import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-rolodex',
  templateUrl: './character-rolodex.component.html',
  styleUrls: ['./character-rolodex.component.css']
})
export class CharacterRolodexComponent implements OnInit {

  characterName: string = 'Morty Smith';
  characterImageUrl: string = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';
  isCharacterDead: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
