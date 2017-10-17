import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Http } from '@angular/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language = 'ko';

  // constructor() { }

  ngOnInit() {
  }

  constructor(private translate: TranslateService, private http: Http, public apiService: ApiService) {
    translate.setDefaultLang('ko');
  }

  switchLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }

  loginUser(e) {
    e.preventDefault();
    let elements = e.target.elements;
    let formData = new FormData();
    formData.append('email', elements.email);
    this.http.post('http://localhost/login.php', formData).subscribe((data) => {
      console.log('got');
    }, (error) => {
      console.log('Error!', error);
    });
    console.log(elements);
  }
}
