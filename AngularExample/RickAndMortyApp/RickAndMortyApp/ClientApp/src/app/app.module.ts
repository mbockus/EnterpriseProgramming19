import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CharacterComponent } from './character/character.component';
import { CharacterRolodexComponent } from './character-rolodex/character-rolodex.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { SearchComponent } from './search/search.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { WubbaPipe } from './wubba.pipe';
import { SurpriseWubbaDirective } from './surprise-wubba.directive';
import { AuthGuard } from './auth.guard';
import { IsSavedGuard } from './is-saved.guard';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { LocalCharacterRolodexComponent } from './local-character-rolodex/local-character-rolodex.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CharacterComponent,
    CharacterRolodexComponent,
    LocationsComponent,
    EpisodesComponent,
    SearchComponent,
    CharacterDetailComponent,
    WubbaPipe,
    SurpriseWubbaDirective,
    CreateCharacterComponent,
    LocalCharacterRolodexComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent, canDeactivate: [IsSavedGuard],  pathMatch: 'full' },
      { path: 'episodes', component: EpisodesComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'characters', canActivate: [AuthGuard], component: CharacterRolodexComponent },
      { path: 'localcharacters', component: LocalCharacterRolodexComponent },
      { path: 'character/create', component: CreateCharacterComponent },
      { path: 'character/update/:id', component: CreateCharacterComponent },
      { path: 'character/:id', component: CharacterDetailComponent },
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
