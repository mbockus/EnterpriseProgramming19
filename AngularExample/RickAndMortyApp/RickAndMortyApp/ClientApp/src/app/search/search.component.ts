import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterSearchResults } from '../character-search-results';
import { Character } from '../character';
import { CanComponentDeactivate } from '../is-saved.guard';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, CanComponentDeactivate {

  searchString: string;
  isAlive: boolean;
  searchResults: Character[];
  loading: boolean = false;
  searchFailed: boolean = false;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  search() {
    this.loading = true;
    this.searchFailed = false;
    this.characterService.searchForCharacters(this.searchString, this.isAlive)
      .subscribe(
        (data: CharacterSearchResults) => { this.searchResults = data.results; this.loading = false; },
        (error: any) => { console.log(error); this.searchFailed = true; this.loading = false; });
  }

  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave?');
  }
}
