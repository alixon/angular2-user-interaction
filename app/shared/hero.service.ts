
import {HEROES} from 'app/shared/mock-heroes';
import {Injectable} from 'angular2/core';


@Injectable()
export class HeroService {
    
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    
    getHero(id: number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        );
    }
    
    generateCoordinate() {
        var lat = 52.7236;
        var lng = 41.4423;
        
        var dlat = Math.random() - 0.5 ;
        var dlng = Math.random() - 0.5 ;
        
        return [ lat + dev, lng + dev];
    }
}