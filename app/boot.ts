// app/boot.ts
import {bootstrap}    from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component'
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {AuthService, IAuthService} from 'app/shared/auth.service';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import {ToastsManager, ToastOptions} from 'ng2-toastr/ng2-toastr';


let toastrOptions = {
    positionClass: 'toast-bottom-right'
  };
  
  
bootstrap(
    AppComponent, 
    [
        HTTP_PROVIDERS, AUTH_PROVIDERS,
        ANGULAR2_GOOGLE_MAPS_PROVIDERS,
        AuthService, provide(IAuthService, { useExisting: AuthService }),
        ToastsManager, provide(ToastOptions, { useValue: new ToastOptions(toastrOptions) })
    ]
);
