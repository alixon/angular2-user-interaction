import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { Headers } from 'angular2/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { AuthService } from 'app/shared/auth.service';


class CredentialsModel {
  username: string;
  password: string;
}

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  providers: [ AuthService ]
})
export class LoginComponent {
  constructor(
    private _router:Router, 
    private _authHttp: AuthHttp,
    private _authService: AuthService,
    private _toastr: ToastsManager
  ) {}


  getRandomQuote() {
    
    this._authHttp.get('http://nodespace-alixon.c9users.io:8081/api/random-quote')
      .map(res => res.text())
      .subscribe(
        data => this.randomQuote = data,
        err => console.error(err),
        () => console.log('Random Quote Complete')
      );
  }
  
  
  login(form) {
    this._authService.login({
      username: form.value.credentials.username,
      password: form.value.credentials.password
    })
    .subscribe(
        data => {
          this._router.parent.navigateByUrl(location.pathname);
          this._toastr.info('You are logged in');
        },
        res => this._toastr.error(res._body);
      )
  }
  
  
  logout() {
    this._authService.logout();
    this._toastr.info('You are logged out!');
  }
  
}
