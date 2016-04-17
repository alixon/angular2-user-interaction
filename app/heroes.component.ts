/// <reference path="./toaster.d.ts" />
import {Component, Input, OnInit, ViewChild, provide} from 'angular2/core';

import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from "ng2-toastr/ng2-toastr";
import {AlertComponent} from "./alert.component";

let toastrOptions = {
    autoDismiss: false,
    positionClass: 'toast-bottom-right',
  };
  

@Component({
    selector: 'my-heroes',
    templateUrl: './app/partial.html',
    styleUrls: ['./app/heroes.component.css'],
    directives: [HeroDetailComponent,  AlertComponent],
    providers: [AlertComponent,
      ToastsManager,
      provide(ToastOptions, { useValue: new ToastOptions(toastrOptions) })  
    ]
})
export class HeroesComponent implements OnInit,AfterViewInit {
    title = 'Tour of Heroes';
    public heroes:Hero[];
    selectedHero: Hero;
    selectedHeroes: Hero[];
    constructor(
      private _heroService: HeroService, 
      public toastr: ToastsManager
    ) {
      
    }
    
    @ViewChild(AlertComponent)
    private _confirm: AlertComponent;

    ngOnInit() {
      this.getHeroes();
    }
    
    getSelectedHeroes() {
      return this.heroes.filter(function(hero) { return hero.selected });
    }
    
    removeSelectedHeroes() {
      this._confirm.show(
        'Are you sure?', 'Remove Heroes', 
        result => {
          if( result === false ) return;
          
          var selectedHeroes = this.getSelectedHeroes();
          this.heroes = this.heroes.filter( hero => return !selectedHeroes.includes(hero) );
          
          this.toastr.warning('You removed ' + selectedHeroes.length +  ' heroes!', 'Congratulations!');
        }
      );
    }
    
    
    
    getHeroes() {
      this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    someHeroSelected() {
      return Boolean( this.heroes && this.getSelectedHeroes().length );
    }

    onSelect(hero:Hero) { 
        this.selectedHero = hero; 
    }
    
}

