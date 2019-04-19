import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    

  constructor(private http: HttpClient) { }

  createUser(userName: string, password: string): Observable<any> {
    var createBody = {
      'userName': userName,
      'password': password
    }
    return this.http.post('api/login/create', createBody)
  }

  loginUser(userName: string, password: string): Observable<any> {
    var loginBody = {
      'userName': userName,
      'password': password
    }
    return this.http.post('api/login', loginBody)
  }
}
