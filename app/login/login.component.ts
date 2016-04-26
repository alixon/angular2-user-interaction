import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


class CredentialsModel {
  username: string;
  password: string;
}

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  providers: [ HTTP_PROVIDERS ]
})
export class LoginComponent {
  constructor(private _router:Router, public _http: Http ) {
    // http.get('people.json')
    //   // Call map on the response observable to get the parsed people object
    //   .map(res => res.json())
    //   // Subscribe to the observable to get the parsed people object and attach it to the
    //   // component
    //   .subscribe(people => this.people = people);
    
  }

  getRandomQuote() {
    this._http.get('http://nodespace-alixon.c9users.io:8081/api/random-quote')
      .map(res => res.text())
      .subscribe(
        data => this.randomQuote = data,
        err => this.logError(err),
        () => console.log('Random Quote Complete')
      );
  }
  
  logError(err) {
    console.error('There was an error: ' + err);
  }
  
  getSecretQuote() {

    var jwt = localStorage.getItem('id_token');
    var authHeader = new Headers();
    if(jwt) {
      authHeader.append('Authorization', 'Bearer ' + jwt);      
    }
  
    this._http.get('http://nodespace-alixon.c9users.io:8081/api/protected/random-quote', {
      headers: authHeader
    })
    .map(res => res.text())
    .filter(x => x.length > 100)
    .subscribe(
      data => { console.log(data) ;this.secretQuote = data },
      err => this.logError(err),
      () => console.log('Secret Quote Complete')
    );

  }

  
  authenticate(form) {
    var username = form.value.credentials.username;
    var password = form.value.credentials.password;
  
    var creds = "username=" + username + "&password=" + password;
  
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
  
    this._http.post('http://nodespace-alixon.c9users.io:8081/users', creds, {
      headers: headers
      })
      .map(res => res.json())
      .subscribe(
        data => this.saveJwt(data.id_token),
        err => this.logError(err),
        () => console.log('Authentication Complete')
      );
  }
  
  saveJwt(jwt) {
    if(jwt) {
      localStorage.setItem('id_token', jwt)
    }
  }




}