
import { Component, OnInit } from "angular2/core";
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import {Hero} from 'app/shared/hero';
import {HeroService} from 'app/shared/hero.service';

@Component({
    selector: "heroes-map",
    templateUrl: "app/heroes-map/heroes-map.component.html",
    styleUrls: ['app/heroes-map/heroes-map.component.css'],
    directives:[ ANGULAR2_GOOGLE_MAPS_DIRECTIVES ],
    providers: [ HeroService ]
})
export class HeroesMapComponent implements OnInit {
    
    
    mapOptions = {
        zoom: 10,
        lat: 52.7236,
        lng: 41.4423
    };
    private heroes: Hero[];
    

    constructor(
        private _heroService: HeroService    
    ) {}
    
    ngOnInit() {
        this.getHeroes();
    }
    
    getHeroes() {
        this._heroService.getHeroes().subscribe(heroes => {this.heroes = heroes;});
    }
}