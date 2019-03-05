import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CharacterComponent } from './character/character.component';
import { CharacterRolodexComponent } from './character-rolodex/character-rolodex.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { SearchComponent } from './search/search.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CharacterComponent,
    CharacterRolodexComponent,
    LocationsComponent,
    EpisodesComponent,
    SearchComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchComponent, pathMatch: 'full' },
      { path: 'episodes', component: EpisodesComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'characters', component: CharacterRolodexComponent },
      { path: 'character/:id', component: CharacterDetailComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
