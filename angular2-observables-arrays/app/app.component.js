"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var arrayTest = [1, 2, 3];
        var observableArray = Rx_1.Observable.from(arrayTest);
        observableArray.subscribe(function (x) { return console.log(x); });
        var startDates = [];
        var startDate = new Date();
        for (var day = -2; day <= 2; day++) {
            var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
            startDates.push(date);
        }
        Rx_1.Observable.from(startDates)
            .map(function (date) {
            console.log("Getting deals for: " + date);
            return arrayTest;
        })
            .subscribe(function (x) { return console.log(x); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  \n  <div class=\"container\">\n    \n    <h1>Observable from arrays</h1>\n\n    <p>Check console of your browser </p>\n  \n  </div>\n  \n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map