import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterSearchResults } from './character-search-results';
import { Observable } from 'rxjs';
import { Character } from './character';
import { LocalCharacter } from './local-character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  searchForCharacters(searchString: string, isAlive: boolean) : Observable<CharacterSearchResults> {
    var status = 'dead';
    if (isAlive) {
      status = 'alive';
    }
    var endpoint = `${this.apiUrl}/character/?name=${searchString}&status=${status}`;
    return this.http.get<CharacterSearchResults>(endpoint);
  }

  getCharacter(id: number): Observable<Character> {
    var endpoint = `${this.apiUrl}/character/${id}`;
    return this.http.get<Character>(endpoint);
  }

  getCharacters(page: number): Observable<CharacterSearchResults> {
    var endpoint = `${this.apiUrl}/character/?page=${page}`;
    return this.http.get<CharacterSearchResults>(endpoint);
  }

  createCharacter(character: LocalCharacter): Observable<LocalCharacter> {
    return this.http.post<LocalCharacter>('api/character', character);
  }

  updateCharacter(character: LocalCharacter): Observable<LocalCharacter> {
    return this.http.put<LocalCharacter>(`api/character/${character.id}`, character);
  }

  getLocalCharacters(): Observable<LocalCharacter[]> {
    return this.http.get<LocalCharacter[]>('api/character');
  }

  getLocalCharacter(characterId : number): Observable<LocalCharacter> {
    return this.http.get<LocalCharacter>(`api/character/${characterId}`);
  }

  deleteLocalCharacter(characterId : number): Observable<LocalCharacter> {
    return this.http.delete<LocalCharacter>(`api/character/${characterId}`);
  }
}
