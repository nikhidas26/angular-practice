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
        console.log("Observable arguments");
        Rx_1.Observable.of(1).subscribe(function (x) { return console.log(x); });
        Rx_1.Observable.of(1, 2, 3).subscribe(function (x) { return console.log(x); });
        console.log("Observable empty");
        Rx_1.Observable.empty().subscribe(function (x) { return console.log(x); });
        console.log("Observable range");
        Rx_1.Observable.range(10, 5).subscribe(function (x) { return console.log(x); });
        console.log("Observable array as an argument");
        Rx_1.Observable.of([1, 2, 3]).subscribe(function (x) { return console.log(x); });
        // console.log("Observable interval examples");
        // var intervalObservable1 = Observable.interval(1000)
        //           .subscribe( (x) => console.log("Waiting every 1 sec" ));
        // var intervalObservable2 = Observable.interval(1000)
        //           .map( () => {
        //             console.log("Calling the server to get the latest news");
        //             return [1,2,3];
        //           })
        //           .subscribe( news => console.log(news));
        // var intervalObservable3 = Observable.interval(1000)
        //           .flatMap( () => {
        //             console.log("Calling the server to get the latest news");
        //             return [1,2,3];
        //           })
        //           .subscribe( news => console.log(news));
        // Observable.interval(10000).subscribe(
        //   () => {
        //     intervalObservable1.unsubscribe();
        //     intervalObservable2.unsubscribe();
        //     intervalObservable3.unsubscribe();
        // });
        console.log("Fork Join examples");
        var userStream = Rx_1.Observable.of({
            userId: 1,
            userName: 'Test_User'
        }).delay(2000);
        var tweetsStream = Rx_1.Observable.of([1, 2, 3])
            .delay(1500);
        console.log("Fork Join result");
        Rx_1.Observable.forkJoin(userStream, tweetsStream)
            .subscribe(function (result) { return console.log(result); });
        console.log("Fork Join with map result");
        Rx_1.Observable.forkJoin(userStream, tweetsStream)
            .map(function (joined) { return new Object({
            user: joined[0],
            tweets: joined[1]
        }); })
            .subscribe(function (result) { return console.log(result); });
        console.log("Error handling");
        var errorObservable = Rx_1.Observable.throw(new Error("Observable custom error"));
        errorObservable.subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); });
        errorObservable.catch(function (err) {
            var localDataStream = Rx_1.Observable.of(["catch", "Observable", "error"]);
            return localDataStream;
        })
            .subscribe(function (x) { return console.log(x); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  \n  <div class=\"container\">\n    \n    <h1>Observable from arguments </h1>\n    <p>Check console of your browser </p>\n  \n  </div>\n  \n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map