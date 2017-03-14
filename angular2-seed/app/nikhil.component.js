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
    var NikhilComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NikhilComponent = (function () {
                function NikhilComponent() {
                    this.title = "test two way binding";
                    this.propertyBinding = "Nikhil is awesome";
                    this.isSuccess = false;
                }
                NikhilComponent.prototype.onClick = function () {
                };
                NikhilComponent.prototype.onInputFocus = function ($event) {
                    this.title = $event.target.value;
                };
                NikhilComponent = __decorate([
                    core_1.Component({
                        selector: 'nikhil',
                        template: "<h2>{{propertyBinding}}</h2>\n                <h2 [textContent]=\"propertyBinding\"></h2>\n            \n\n            <input type=\"text\" [(ngModel)]=\"title\" />\n            Label: {{title}}\n            <button class=\"btn btn-primary\" (click)=\"onClick();\">Test</button>\n\n            <button class=\"btn btn-primary\" [class.btn-danger]=\"!isSuccess\" [class.btn-success]=\"isSuccess\" >Test</button>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NikhilComponent);
                return NikhilComponent;
            }());
            exports_1("NikhilComponent", NikhilComponent);
        }
    }
});
//# sourceMappingURL=nikhil.component.js.map