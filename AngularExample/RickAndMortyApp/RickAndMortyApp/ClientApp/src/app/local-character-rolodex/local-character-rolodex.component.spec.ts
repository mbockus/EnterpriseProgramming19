import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCharacterRolodexComponent } from './local-character-rolodex.component';

describe('LocalCharacterRolodexComponent', () => {
  let component: LocalCharacterRolodexComponent;
  let fixture: ComponentFixture<LocalCharacterRolodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCharacterRolodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalCharacterRolodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
