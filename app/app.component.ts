import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';
import { SlimLoadingBarService, SlimLoadingBar } from 'ng2-slim-loading-bar/ng2-slim-loading-bar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { HeroService }     from 'app/shared/hero.service';
import { HeroesComponent } from 'app/heroes/heroes.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { HeroesMapComponent } from 'app/heroes-map/heroes-map.component';
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component';


@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }, {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }, {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }, {
    path: '/map',
    name: 'HeroesMap',
    component: HeroesMapComponent
  }
  
])
@Component({
  selector: 'my-app',
  styleUrls: ['app/app.component.css'],
  templateUrl: 'app/app.component.html',
  directives: [ 
    ROUTER_DIRECTIVES, 
    SlimLoadingBar, 
    HeroesComponent, 
    HeroesMapComponent, 
    MD_SIDENAV_DIRECTIVES, 
    MD_LIST_DIRECTIVES,
    MdButton 
  ],
  providers: [ ROUTER_PROVIDERS, SlimLoadingBarService , HeroService ]
})
export class AppComponent {

  title = 'Tour of Heroes';
  
  constructor(
    private _router:Router,
    private slimLoadingBarService:SlimLoadingBarService
    ) {
      _router.subscribe(()=>{this.startLoading()});
    };
    
    startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
        
        setTimeout(() => {
            this.slimLoadingBarService.complete();
        }, 2000);
    }
    
}
