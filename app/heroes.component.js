System.register(['angular2/core', "angular2/router", 'ng2-toastr/ng2-toastr', 'app/hero-detail/hero-detail.component', 'app/hero.service', "app/my-modal/alert.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, ng2_toastr_1, hero_detail_component_1, hero_service_1, alert_component_1;
    var toastrOptions, HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (alert_component_1_1) {
                alert_component_1 = alert_component_1_1;
            }],
        execute: function() {
            toastrOptions = {
                autoDismiss: false,
                positionClass: 'toast-bottom-right',
            };
            HeroesComponent = (function () {
                function HeroesComponent(_heroService, toastr, _router) {
                    this._heroService = _heroService;
                    this.toastr = toastr;
                    this._router = _router;
                    this.title = 'Tour of Heroes';
                }
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.getSelectedHeroes = function () {
                    return this.heroes.filter(function (hero) { return hero.selected; });
                };
                HeroesComponent.prototype.removeSelectedHeroes = function () {
                    var _this = this;
                    this._confirm.show('Are you sure?', 'Remove Heroes', function (result) {
                        if (result === false)
                            return;
                        var selectedHeroes = _this.getSelectedHeroes();
                        _this.heroes = _this.heroes.filter(function (hero) { return !selectedHeroes.includes(hero); });
                        _this.toastr.warning('You removed ' + selectedHeroes.length + ' heroes!', 'Congratulations!');
                    });
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.someHeroSelected = function () {
                    return Boolean(this.heroes && this.getSelectedHeroes().length);
                };
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                __decorate([
                    core_1.ViewChild(alert_component_1.AlertComponent), 
                    __metadata('design:type', (typeof (_a = typeof alert_component_1.AlertComponent !== 'undefined' && alert_component_1.AlertComponent) === 'function' && _a) || Object)
                ], HeroesComponent.prototype, "_confirm", void 0);
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: './app/partial.html',
                        styleUrls: ['./app/heroes.component.css'],
                        directives: [hero_detail_component_1.HeroDetailComponent, alert_component_1.AlertComponent],
                        providers: [
                            alert_component_1.AlertComponent,
                            ng2_toastr_1.ToastsManager,
                            core_1.provide(ng2_toastr_1.ToastOptions, { useValue: new ng2_toastr_1.ToastOptions(toastrOptions) })
                        ]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_b = typeof hero_service_1.HeroService !== 'undefined' && hero_service_1.HeroService) === 'function' && _b) || Object, ng2_toastr_1.ToastsManager, router_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
                var _a, _b;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map