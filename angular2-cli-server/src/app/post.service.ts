import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Post } from './post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PostService {

    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) {

    }

    getPosts() : Observable<Post[]> {
        return this._http.get(this._url)
                    .map(response => response.json());
                    
    }

    getPostsPromise() : Promise<Post[]> {
        return this._http.get(this._url)
                   .map(response => response.json())
                   .toPromise();   
    }

    createPost(post:Post) {
        return this._http.post(this._url, JSON.stringify(post))
                    .map(response => response.json);
    }

    // accessing cross-domain resources

    getCrossDomainSnippet() {
        var headers = new Headers({
            "access-control-request-method" : "POST"
        });

        var options = new RequestOptions(headers);
        this._http.get(this._url, options);
    }
 
}