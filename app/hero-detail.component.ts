
import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div>
            <label>id: </label> {{hero.id}}
        </div>
        <div>
            <label>name:</label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>`
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;
    
    constructor(private _heroService: HeroService, private _routeParams: RouteParams) {}
    
    ngOninit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
}
    