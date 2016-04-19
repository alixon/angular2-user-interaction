import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesMapComponent } from './heroes-map/heroes-map.component';



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
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['HeroesMap']">Map</a>
    </nav>
    <router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES, HeroesComponent, HeroesMapComponent ],
  providers: [ ROUTER_PROVIDERS, HeroService ]
})
export class AppComponent {

  title = 'Tour of Heroes';
}