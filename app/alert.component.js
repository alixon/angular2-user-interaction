System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AlertComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AlertComponent = (function () {
                function AlertComponent() {
                    this.title = "";
                    this.message = "";
                    this.isVisible = false;
                }
                AlertComponent.prototype.show = function (message, title, confirmationResult) {
                    if (title === void 0) { title = 'Alert'; }
                    this.isVisible = true;
                    this.message = message;
                    this.title = title;
                    this.confirmationResult = confirmationResult;
                };
                AlertComponent.prototype.hide = function () {
                    this.isVisible = false;
                };
                AlertComponent.prototype.cancel = function () {
                    this.confirmationResult(false);
                    this.hide();
                };
                AlertComponent.prototype.accept = function () {
                    this.confirmationResult(true);
                    this.hide();
                };
                AlertComponent = __decorate([
                    core_1.Injectable(),
                    core_1.Component({
                        selector: 'my-modal',
                        templateUrl: './app/alert.component.html',
                        styleUrls: ['./app/alert.component.css'],
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlertComponent);
                return AlertComponent;
            }());
            exports_1("AlertComponent", AlertComponent);
        }
    }
});
//# sourceMappingURL=alert.component.js.map