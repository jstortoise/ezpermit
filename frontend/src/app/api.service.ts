import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  private isLogin;
  private token;
  private email;

  constructor(private http: Http) { }

  isLoggedIn() {
    return this.isLogin;
  }

  setToken(token: any) {
    this.token = token;
  }

  setLoggedIn(flag: any) {
    this.isLogin = flag;
  }
}
