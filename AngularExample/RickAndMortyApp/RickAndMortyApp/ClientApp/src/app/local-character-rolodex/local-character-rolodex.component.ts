import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { LocalCharacter } from '../local-character';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";


@Component({
  selector: 'app-local-character-rolodex',
  templateUrl: './local-character-rolodex.component.html',
  styleUrls: ['./local-character-rolodex.component.css']
})
export class LocalCharacterRolodexComponent implements OnInit {

  localCharacters: LocalCharacter[];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.refreshCharacters();
    library.add(faCheck);
    dom.watch();
  }

  delete(characterId: number) {
    this.characterService.deleteLocalCharacter(characterId).subscribe(() => this.refreshCharacters());
  }

  refreshCharacters() {
    this.characterService.getLocalCharacters().subscribe((data: LocalCharacter[]) => this.localCharacters = data)
  }

}
