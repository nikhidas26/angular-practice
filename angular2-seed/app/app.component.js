System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './nikhil.component', './like.component', './voter.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, nikhil_component_1, like_component_1, voter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (nikhil_component_1_1) {
                nikhil_component_1 = nikhil_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = true;
                    this.title = "Angular app";
                    this.imageUrl = "http://lorempixel.com/400/200";
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.tweet = {
                        voteCount: 50,
                        myVote: 0,
                        noOfLikes: 50,
                        iLike: false
                    };
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log("Click event!", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by div");
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVoteClick = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n            <voter \n            [voteCount]=\"tweet.voteCount\" \n            [myVote]=\"tweet.myVote\" \n            (vote)=\"onVoteClick($event)\"> \n            \n            </voter>\n            \n            \n            <like [noOfLikes]=\"tweet.noOfLikes\" [iLike]=\"tweet.iLike\"> </like>\n            <!--\n            <nikhil></nikhil>\n            <favorite [isFavorite]=\"post.isFavorite\" (favChange)=\"onFavoriteChange($event)\"></favorite>\n            <input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\" />\n            <input type=\"button\" (click)=\"title = ''\"value=\"Clear\" />\n            <input type=\"text\" [(ngModel)]=\"title\" />\n\n            Preview: {{ title }}\n                <button class=\"btn btn-primary\" \n                        [style.backgroundColor]=\"isActive ? 'blue' : 'grey'\"\n                        [class.active]=\"isActive\">Submit</button>\n\n                <h1>{{ title }}</h1>\n                <img src=\"{{ imageUrl }}\" />\n                <img [src] = \"imageUrl\" />\n                \n                <div (click)=\"onDivClick()\">\n                    <button (click)=\"onClick($event)\">Submit_event</button>\n                </div>\n            \n\n                <courses></courses>\n                <authors></authors>\n                \n                -->",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, nikhil_component_1.NikhilComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map