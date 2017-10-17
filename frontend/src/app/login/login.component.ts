import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private http: Http) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();

    var email = e.target.elements['email'].value;
    var password = e.target.elements['password'].value;

    this.http.post('http://localhost:8000/api/authenticate', {
      email: email,
      password: password
    }).subscribe((res: Response) => {
      const ret = res.json();

      try {
        if (ret.token) {
          this.api.setLoggedIn(true);
          this.api.setToken(ret.token);
        }
      } catch (e) {}
    });
  }
  
}
