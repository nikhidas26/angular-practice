import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {FavoriteComponent} from './favorite.component'
import {NikhilComponent} from './nikhil.component'
import {LikeComponent} from './like.component'
import {VoterComponent} from './voter.component'

@Component({
    selector: 'my-app',
    template: `

            <voter 
            [voteCount]="tweet.voteCount" 
            [myVote]="tweet.myVote" 
            (vote)="onVoteClick($event)"> 
            
            </voter>
            
            
            <like [noOfLikes]="tweet.noOfLikes" [iLike]="tweet.iLike"> </like>
            <!--
            <nikhil></nikhil>
            <favorite [isFavorite]="post.isFavorite" (favChange)="onFavoriteChange($event)"></favorite>
            <input type="text" [value]="title" (input)="title = $event.target.value" />
            <input type="button" (click)="title = ''"value="Clear" />
            <input type="text" [(ngModel)]="title" />

            Preview: {{ title }}
                <button class="btn btn-primary" 
                        [style.backgroundColor]="isActive ? 'blue' : 'grey'"
                        [class.active]="isActive">Submit</button>

                <h1>{{ title }}</h1>
                <img src="{{ imageUrl }}" />
                <img [src] = "imageUrl" />
                
                <div (click)="onDivClick()">
                    <button (click)="onClick($event)">Submit_event</button>
                </div>
            

                <courses></courses>
                <authors></authors>
                
                -->`,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, NikhilComponent, LikeComponent, VoterComponent]
})
export class AppComponent { 

    isActive = true;
    title="Angular app";
    imageUrl = "http://lorempixel.com/400/200"

    onClick($event) {
        $event.stopPropagation();
        console.log("Click event!", $event);
    }

    onDivClick() {
        console.log("Handled by div");
    }

    onFavoriteChange($event) {
        console.log($event);
    }

    onVoteClick($event) {
        console.log($event);
    }

    post = {
        title: "Title",
        isFavorite: true
    }

    tweet = {
        voteCount: 50,
        myVote: 0,
        noOfLikes: 50,
        iLike: false
    }
}