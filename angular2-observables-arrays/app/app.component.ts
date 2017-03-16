import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  
  
  <div class="container">
    
    <h1>Observable from arrays</h1>

    <p>Check console of your browser </p>
  
  </div>
  
  `
})
export class AppComponent {
  
  ngAfterViewInit() {

    var arrayTest = [1,2,3];
    var observableArray = Observable.from(arrayTest);

    observableArray.subscribe(x => console.log(x));

    var startDates = [];
    var startDate = new Date()

    for(var day = -2; day <= 2; day++) {
      var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
                );
        startDates.push(date);
    }

    Observable.from(startDates)
              .map( date =>  { 
                console.log("Getting deals for: " + date);
                return arrayTest;
              })
              .subscribe( x => console.log(x));
  }
}
