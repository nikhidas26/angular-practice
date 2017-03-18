import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent implements OnInit {

  isLoading = true;

  constructor(private _postService: PostService) {
    this._postService.createPost({userId: 1, title: 'a', body: 'b'});
  }
  title = 'app works!';

// called after the constructor
  ngOnInit() {
       this._postService.getPosts()
        .subscribe(posts => {
          this.isLoading = false;
          console.log(posts[0])
        });

        this._postService
            .getPostsPromise()
            .then(posts => {
              this.isLoading = false;
              console.log(posts);
            });
  }
}
