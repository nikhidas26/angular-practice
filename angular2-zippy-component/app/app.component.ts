import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>

            <zippy title="This is the Nikhil  1">
              Here is the content  for 1          
            </zippy>

            <zippy title="This is the title 2">
              Here is the content  for 2        
            </zippy>
            `
})
export class AppComponent {

  titles = ["This is title 1", "This is title 2"];

}