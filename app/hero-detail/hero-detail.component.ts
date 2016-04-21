
import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { ANGULAR2_GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

import { HeroService } from 'app/shared/hero.service';
import { Hero } from 'app/shared/hero';
import { GeolocationService } from 'app/shared/geolocation.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail/hero-detail.component.html',
    styleUrls: ['app/hero-detail/hero-detail.component.css'],
    directives:[ ANGULAR2_GOOGLE_MAPS_DIRECTIVES ],
    providers: [ GeolocationService ]
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;
    mapOptions = {
        zoom: 10,
        centerCords: [0,0]
    };
        
    constructor(
        private _heroService: HeroService, 
        private _routeParams: RouteParams,
        private _geoLocation: GeolocationService
    ) {}
    
    setCoordinates(event) {
        this.hero.coordinates = [ event.coords.lat, event.coords.lng ];
    }
    
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => { 
                this.hero = hero;
                this.mapOptions.centerCords = hero.coordinates;
            });
            
    }
    
    getBrowserLocation() {
        this._geoLocation.getLocation().subscribe((result) => {
            let browserCoords = [ result.coords.latitude, result.coords.longitude ];
            this.hero.coordinates = browserCoords;
            this.mapOptions.centerCords = browserCoords;
            this.mapOptions.zoom = 15;
        });
    }

    goBack() {
        window.history.back();
    }
}
    