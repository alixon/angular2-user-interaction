import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';
import { SlimLoadingBarService, SlimLoadingBar } from 'ng2-slim-loading-bar/ng2-slim-loading-bar';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from 'app/hero-detail/hero-detail.component'

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
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES, SlimLoadingBar, HeroesComponent ],
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