import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';


import { Hero } from 'app/shared/hero';
import { HeroService } from 'app/shared/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    
    constructor(private _heroService: HeroService, private _router: Router) {}
    
    ngOnInit() {
        this._heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1,5));
 
    }
    
    gotoDetail(hero: Hero) {
      let link = ['HeroDetail', { id: hero.id }];
      this._router.navigate(link);
    }
    
}
