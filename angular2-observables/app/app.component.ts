import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime}';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'my-app',
  template: `
  
  <div class="container">
    <h1>Change password assignment</h1>

    <input id="search" type="text" class="form-control">
  
  </div>
  
  `
})
export class AppComponent {

  ngAfterViewInit() {
    
    console.log(new Observable());
  }

}
