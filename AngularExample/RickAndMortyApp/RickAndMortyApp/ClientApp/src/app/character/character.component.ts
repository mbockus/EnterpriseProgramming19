import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() name: string;
  @Input() imageUrl: string;
  @Input() isDead: boolean = true;
  @Input() species: string = 'Human';

  constructor() { }

  ngOnInit() {
  }

}
