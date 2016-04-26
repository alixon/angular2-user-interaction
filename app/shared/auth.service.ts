
import {Injectable} from 'angular2/core';

export abstract class IAuthService {
  // is the current user authenticated?
  abstract isAuthenticated():boolean;

  // does the current user have one of these roles?
  abstract hasRole(roles: string[]):boolean;
}


@Injectable()
export class AuthService extends IAuthService {
  user:User;

  isAuthenticated():boolean {
    return this.user !== null;
  }

  hasRole(string[] roles):boolean {
    // return this.isAuthenticate() && [check intersection of user roles]
    return false;
  }

  // other auth functionality, sign-in, token handling etc
}