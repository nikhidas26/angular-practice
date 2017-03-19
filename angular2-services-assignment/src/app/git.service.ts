import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GitUserService {

    private _gitApiUrl = "https://api.github.com/users/";

    constructor (private _http: Http) {
        
    }

    getUsers(userName: String) : Observable<any>{
        var _usersUrl = this._gitApiUrl + userName;
        return this._http.get(_usersUrl).map(res => res.json());
    }

    getFollowers(userName: String): Observable<any> {
        var _followersUrl = this._gitApiUrl + userName + "/followers";
        return this._http.get(_followersUrl).map(res => res.json());
    }
}