
import {HEROES} from 'app/shared/mock-heroes';
import {Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class HeroService {
    
    constructor(public authHttp: AuthHttp) {}
    
    getHeroes() {
        return this.authHttp
            .get('http://nodespace-alixon.c9users.io:8081/api/protected/random-quote')
            .map(res => res.json())
    }
    
    getHero(id: number) {
        return this.getHeroes().filter(hero => hero.id === id);
        
    }
    
    generateCoordinate() {
        var lat = 52.7236;
        var lng = 41.4423;
        
        var dlat = Math.random() - 0.5 ;
        var dlng = Math.random() - 0.5 ;
        
        return [ lat + dev, lng + dev];
    }
}