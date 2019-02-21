import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterRolodexComponent } from './character-rolodex.component';

describe('CharacterRolodexComponent', () => {
  let component: CharacterRolodexComponent;
  let fixture: ComponentFixture<CharacterRolodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterRolodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterRolodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
