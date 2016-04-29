/// <reference path="./toaster.d.ts" />
import {Component, Input, OnInit, ViewChild, provide} from 'angular2/core';
import {Router} from "angular2/router";
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdButton } from '@angular2-material/button';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {HeroDetailComponent} from 'app/hero-detail/hero-detail.component';
import {Hero} from 'app/shared/hero';
import {HeroService} from 'app/shared/hero.service';
import {AlertComponent} from "app/my-modal/alert.component";
  

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes/heroes.component.html',
    styleUrls: ['app/heroes/heroes.component.css'],
    directives: [ 
      MdCheckbox, 
      HeroDetailComponent, 
      AlertComponent, 
      MdCheckbox, 
      MdButton
    ],
    providers: [
      AlertComponent
    ]
})
export class HeroesComponent implements OnInit,AfterViewInit {
    title = 'Tour of Heroes';
    public heroes:Hero[];
    selectedHero: Hero;
    selectedHeroes: Hero[];
    constructor(
      private _heroService: HeroService, 
      public toastr: ToastsManager,
      private _router: Router,
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
          this.heroes = this.heroes.filter( hero => {return !selectedHeroes.includes(hero)} );
          
          this.toastr.warning('You removed ' + selectedHeroes.length +  ' heroes!', 'Congratulations!');
        }
      );
    }
    
    
    
    getHeroes() {
      this._heroService
        .getHeroes()
        .subscribe(heroes => this.heroes = heroes,
                    error => console.log(error));
    }
    
    someHeroSelected() {
      return Boolean( this.heroes && this.getSelectedHeroes().length );
    }

    onSelect(hero:Hero) { 
        this.selectedHero = hero; 
    }
    
    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
   }
    
}

