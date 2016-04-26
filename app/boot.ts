// app/boot.ts
import {bootstrap}    from 'angular2/platform/browser'
import {provide} from 'angular2/core';
import {AppComponent} from './app.component'
import {ANGULAR2_GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {AuthService, IAuthService} from 'app/shared/auth.service';

bootstrap(
    AppComponent, 
    [ANGULAR2_GOOGLE_MAPS_PROVIDERS], 
    AuthService,
    provide(IAuthService, { useExisting: AuthService }) 
);
