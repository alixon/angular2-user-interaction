import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';
import { SlimLoadingBarService, SlimLoadingBar } from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
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
  },{
    path: '/map',
    name: 'HeroesMap',
    component: HeroesMapComponent
  }
  
])
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ng2-slim-loading-bar [height]="2" [color] = "'red'"></ng2-slim-loading-bar>
    
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['HeroesMap']">Map</a>
    </nav>
    <router-outlet></router-outlet>
  `,
<<<<<<< HEAD
  directives: [ ROUTER_DIRECTIVES, SlimLoadingBar, HeroesComponent ],
  providers: [ ROUTER_PROVIDERS, SlimLoadingBarService , HeroService ]
=======
  directives: [ ROUTER_DIRECTIVES, HeroesComponent, HeroesMapComponent ],
  providers: [ ROUTER_PROVIDERS, HeroService ]
>>>>>>> angular2-google-maps
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