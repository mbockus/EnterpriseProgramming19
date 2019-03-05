import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterSearchResults } from '../character-search-results';
import { Character } from '../character';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString: string;
  isAlive: boolean;
  searchResults: Character[];
  loading: boolean = false;

  constructor(private characterService : CharacterService) { }

  ngOnInit() {
  }

  search() {
    this.loading = true;
    this.characterService.searchForCharacters(this.searchString, this.isAlive)
      .subscribe((data: CharacterSearchResults) => { this.searchResults = data.results; this.loading = false; } );
  }

}
