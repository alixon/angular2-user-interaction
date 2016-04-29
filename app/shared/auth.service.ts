
import {Injectable} from 'angular2/core';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

export abstract class IAuthService {
  // is the current user authenticated?
  abstract isAuthenticated():boolean;

  // does the current user have one of these roles?
  abstract hasRole(roles: string[]):boolean;
}


@Injectable()
export class AuthService extends IAuthService {
  LOGIN_URL: string = 'http://nodespace-alixon.c9users.io:8081/users';
  SIGNUP_URL: string = 'http://nodespace-alixon.c9users.io:8081/users';

  user:User;
  jwtHelper: JwtHelper = new JwtHelper();
  contentHeader: Headers = new Headers({"Content-Type": "application/json"});
  
  constructor( private http: Http ) {}

  isAuthenticated():boolean {
    return tokenNotExpired();
  }

  hasRole(string[] roles):boolean {
    return this.isAuthenticated() && true;
  }

  login(credentials) {
    return this.http
      .post(this.LOGIN_URL, JSON.stringify(credentials), { headers: this.contentHeader })
      .map(res => res.json())
      .do(
        data => this.authSuccess(data.id_token),
        err => console.log(err)
      );

  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    // this.router.navigate(['Home']);
  }
  
  signup(credentials) {
    this.http.post(this.SIGNUP_URL, JSON.stringify(credentials), { headers: this.contentHeader })
      .map(res => res.json())
      .subscribe(
        data => this.authSuccess(data.id_token),
        err => this.error = err
      );
  }
  
  authSuccess(token) {
    localStorage.setItem('id_token', token);
    this.user = this.jwtHelper.decodeToken(token).username;
  }
  
  getUsername() {
    let token = localStorage.getItem('id_token');
    return this.jwtHelper.decodeToken(token).username;
  }
  
}