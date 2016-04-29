import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouteData, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {AuthService} from 'app/shared/auth.service';

@Directive({
  selector: 'secure-outlet',
  providers: [ AuthService ]
})
export class SecureRouterOutlet extends RouterOutlet {
  signin:string;
  unauthorized:string;

  constructor(
    _elementRef: ElementRef, 
    _loader: DynamicComponentLoader,
    private _parentRouter: Router, 
    @Attribute('name') nameAttr: string,
    private _authService: AuthService,
    @Attribute('signin') signinAttr: string,
    @Attribute('unauthorized') unauthorizedAttr: string
  ) {
    super(_elementRef, _loader, _parentRouter, nameAttr);
    this.signin = signinAttr;
    this.unauthorized = unauthorizedAttr;
  }

  activate(nextInstruction: ComponentInstruction): Promise<any> {
    var roles = <string[]>nextInstruction.routeData.data['roles'];

    // no roles defined means route has no restrictions so activate
    if (roles == null) {
      return super.activate(nextInstruction);
    }

    // if user isn't authenticated then redirect to sign-in route
    // pass the URL to this route for redirecting back after auth
    // TODO: include querystring parameters too?
    if (!this._authService.isAuthenticated()) {
      var ins = this._parentRouter.generate([this.signin,{url:location.pathname}]);
      return super.activate(ins.component);
    }

    // if no specific roles are required *or* the user has one of the
    // roles required then the route can be activated
    if (roles.length == 0 || this._authService.hasRole(roles)) {
      return super.activate(nextInstruction);
    }

    // user has insufficient role permissions so redirect to denied
    var ins = this._parentRouter.generate([this.unauthorized]);
    return super.activate(ins.component);
  }

  reuse(nextInstruction: ComponentInstruction): Promise<any> {
    return super.reuse(nextInstruction);
  }
}