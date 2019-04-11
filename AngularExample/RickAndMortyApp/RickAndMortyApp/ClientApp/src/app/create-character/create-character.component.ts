import { Component, OnInit } from '@angular/core';
import { LocalCharacter } from '../local-character';
import * as moment from 'moment';
import { CharacterService } from '../character.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  createdTime: any = {
    "hour": 0,
    "minute": 0,
    "seconds": 0
  };
  createdDate: any = {
    "year": 2019,
    "month": 4,
    "day": 11
  };

  newCharacter: LocalCharacter = {
    id: 0,
    name: "",
    createdDate: new Date()
  };


  constructor(private route: ActivatedRoute,
    private characterService: CharacterService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.characterService.getLocalCharacter(Number(params.get('id'))))
    ).subscribe((data: LocalCharacter) => this.populateForm(data));
  }

  populateForm(character: LocalCharacter) {
    this.newCharacter = character;
    var momentInstance = moment.utc(this.newCharacter.createdDate).local();
    this.createdTime.hour = momentInstance.hour();
    this.createdTime.minute = momentInstance.minute();
    this.createdDate.month = momentInstance.month();
    this.createdDate.day = momentInstance.day();
    this.createdDate.year = momentInstance.year();
  }

  createCharacter() {
    var selectedCreateDate = new Date(this.createdDate.year, this.createdDate.month-1, this.createdDate.day, this.createdTime.hour, this.createdTime.minute, 0, 0);
    var utcDate = moment(selectedCreateDate).utc();
    this.newCharacter.createdDate = utcDate.toDate();

    this.characterService.createCharacter(this.newCharacter).subscribe(() => console.log('yay') );

  }

}
