import { Component, OnInit } from '@angular/core';
import { GitUserService } from './git.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitUserService]
})
export class AppComponent {

  title = 'Git users and followers!';

  
  constructor(private _gitUserService: GitUserService) {
    
  }

}
