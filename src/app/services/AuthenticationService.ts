import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthenticationService {
  private url: string = "http://localhost:8080/login";
  constructor(private http: HttpClient) {

  }
  login(user) {
    return this.http.post(this.url, user, { observe: 'response', headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
  }
}