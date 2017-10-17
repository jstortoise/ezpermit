import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private http: Http) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();

    var firstname = e.target.elements['firstname'].value;
    var lastname = e.target.elements['lastname'].value;
    var nationality = e.target.elements['nationality'].value;
    var city = e.target.elements['city'].value;
    var email = e.target.elements['email'].value;
    var tob = e.target.elements['tob'].value;
    var category1 = e.target.elements['category1'].value;
    var category2 = e.target.elements['category2'].value;
    var category3 = e.target.elements['category3'].value;
    var category4 = e.target.elements['category4'].value;
    var etc = e.target.elements['etc'].value;
    var career = e.target.elements['career'].value;
    var job = e.target.elements['job'].value;
    var sdate = e.target.elements['sdate'].value;
    var edate = e.target.elements['edate'].value;
    var purpose = e.target.elements['purpose'].value;

    this.http.post('http://localhost:8000/api/register', {
      firstname: firstname,
      lastname: lastname,
      nationality: nationality,
      city: city,
      email: email,
      tob: tob,
      category1: category1,
      category2: category2,
      category3: category3,
      category4: category4,
      etc: etc,
      career: career,
      job: job,
      sdate: sdate,
      edate: edate,
      purpose: purpose
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
