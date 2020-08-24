import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class RegistrationService {
  private url: string = "http://206.189.71.170:8082/register";

  constructor(private http: HttpClient){}

  RegisterNewUser(user){
    return this.http.post(this.url, JSON.stringify(user), { observe: 'response', headers: { 'Accept': 'application/json', 'Content-type': 'application/json' } });
   }
}
