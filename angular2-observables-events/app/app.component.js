"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(fb) {
        this.form = fb.group({
            search: []
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var search = this.form.get('search');
        var observable = Rx_1.Observable.from(search.valueChanges);
        observable.debounceTime(400)
            .map(function (str) { return str.replace(" ", "-"); })
            .subscribe(function (v) { return console.log(v); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  \n  <div class=\"container\">\n    \n    <h1>Observable form events</h1>\n\n    <form [formGroup]=\"form\">\n      <input id=\"search\"\n              name=\"search\" \n              type=\"text\" \n              class=\"form-control\" \n              formControlName=\"search\"/>\n    </form>\n  \n  </div>\n  \n  "
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map