import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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


  // constructor() {
  //   var keyups = Observable.fromEvent($("#search"),"keyup");

  //   keyups.subscribe( data => console.log(data))
  // }

  ngAfterViewInit() {
    var keyups = Observable.fromEvent($("#search"), "keyup")
                .map(e => e.target.value)
                .filter(text => text.length>=3)
                .debounceTime(400)
                .distinctUntilChanged()
                .flatMap(searchTerm => {
                  var url = "https://api.spotify.com/v1/search?type=artist&q=" + searchTerm;
                  var promise = $.getJSON(url);
                  return Observable.fromPromise(promise);
                });
    var subscription = keyups.subscribe( data => console.log(data));
    subscription.unsubscribe();

  }

}
