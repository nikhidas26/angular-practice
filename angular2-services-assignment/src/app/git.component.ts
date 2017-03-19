import { Component, OnInit, Input } from '@angular/core';
import { GitUserService } from './git.service';
import { Observable } from 'rxjs';

@Component ({
    selector:'git',
    template: `

        <div class="row">
            <div class="col-lg-6">
                <div class="input-group">
                    <input type="text" 
                        class="form-control" 
                        placeholder="Search for git username.."
                        [(ngModel)]="gitUserName">
                    <span class="input-group-btn">
                    <button type="submit" 
                            class="btn btn-default" 
                            type="button"
                            (click)="onClick()">Go!</button>
                    </span>
                </div>  
            </div>
        </div>  

        <div *ngIf="isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
        <h2>@{{user.login}}</h2>
        <img src="{{user.avatar_url}}" class="avatar"/>
        <h2>Followers</h2>

        <ul class="media-list">
            <li *ngFor="let follower of followers" class="media">
                <div class="media-left">
                <a href="#">
                    <img class="avatar" src="{{follower.avatar_url}}">
                </a>
                </div>
                <div class="media-body">
                <h4 class="media-heading">{{follower.login}}</h4>
                </div>
            </li>
        </ul>
    `,
    styles: [`
        .avatar {
            width: 100;
            height: 50px;
            border-radius: 100%
        }
    `]
})
export class GitComponent implements OnInit {

    gitUserName;

    isValid = true;
        
    isLoading = true;
    user = {};
    followers=[];

    constructor (private _gitUserService : GitUserService) {

    }


    onClick() {
        if(this.gitUserName != undefined && this.gitUserName != '') {
            Observable.forkJoin(this._gitUserService.getUsers(this.gitUserName),
                            this._gitUserService.getFollowers(this.gitUserName))
                    .subscribe(response => {
                        this.user = response[0];
                        this.followers = response[1];
                    }, 
                    null,
                    () => {
                        this.isLoading=false;
                    });
        } else {
            this.isValid = false;
        }
    }

    ngOnInit() {
        console.log(this.gitUserName);
        Observable.forkJoin(this._gitUserService.getUsers("octocat"),
                            this._gitUserService.getFollowers("octocat"))
                    .subscribe(response => {
                        this.user = response[0];
                        this.followers = response[1];
                    }, 
                    null,
                    () => {
                        this.isLoading=false;
                    });
                    
    }

}