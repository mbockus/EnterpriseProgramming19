import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  private character: Character;

  constructor(private route: ActivatedRoute,
    private service : CharacterService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCharacter(Number(params.get('id'))))
    ).subscribe((data: Character) => this.character = data);
  }

}
