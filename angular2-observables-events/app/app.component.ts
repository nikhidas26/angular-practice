import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  
  
  <div class="container">
    
    <h1>Observable form events</h1>

    <form [formGroup]="form">
      <input id="search"
              name="search" 
              type="text" 
              class="form-control" 
              formControlName="search"/>
    </form>
  
  </div>
  
  `
})
export class AppComponent {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      search: []
    }); 
  }

  ngAfterViewInit() {
    var search = this.form.get('search');

    var observable = Observable.from(search.valueChanges);

    observable.debounceTime(400)
        .map(str => str.replace(" ", "-"))
        .subscribe( v => console.log(v));
     
  }

}
