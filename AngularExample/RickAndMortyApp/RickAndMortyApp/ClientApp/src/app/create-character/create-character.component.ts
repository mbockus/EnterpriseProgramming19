import { Component, OnInit } from '@angular/core';
import { LocalCharacter } from '../local-character';
import * as moment from 'moment';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  createdTime: any;
  createdDate: any;
  newCharacter: LocalCharacter = {
    id: 0,
    name: "",
    createdDate: new Date()
  };

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  createCharacter() {
    var selectedCreateDate = new Date(this.createdDate.year, this.createdDate.month-1, this.createdDate.day, this.createdTime.hour, this.createdTime.minute, 0, 0);
    var utcDate = moment(selectedCreateDate).utc();
    this.newCharacter.createdDate = utcDate.toDate();

    this.characterService.createCharacter(this.newCharacter).subscribe(() => console.log('yay') );

  }

}
