import { Component, OnInit } from '@angular/core';
import { CharacterSearchResults } from '../character-search-results';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-rolodex',
  templateUrl: './character-rolodex.component.html',
  styleUrls: ['./character-rolodex.component.css']
})
export class CharacterRolodexComponent implements OnInit {

  private characterResults: CharacterSearchResults;
  private currentPage: number = 1;

  constructor(private service : CharacterService) { }

  ngOnInit() {
    this.service.getCharacters(this.currentPage).subscribe((data: CharacterSearchResults) => this.characterResults = data)
  }

  refreshResults() {
    this.service.getCharacters(this.currentPage).subscribe((data: CharacterSearchResults) => this.characterResults = data)
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.refreshResults();
  }

  previousPage() {
    this.currentPage--;
    this.refreshResults();
  }


}
