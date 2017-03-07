import {Component} from 'angular2/core'

@Component({
    selector: 'nikhil',
    template: `<h2>{{propertyBinding}}</h2>
                <h2 [textContent]="propertyBinding"></h2>
            

            <input type="text" [(ngModel)]="title" />
            Label: {{title}}
            <button class="btn btn-primary" (click)="onClick();">Test</button>

            <button class="btn btn-primary" [class.btn-danger]="!isSuccess" [class.btn-success]="isSuccess" >Test</button>`


})
export class NikhilComponent {

    title="test two way binding";

    propertyBinding="Nikhil is awesome";

    isSuccess = false;

    onClick() {
       
    }

    onInputFocus($event) {
        this.title = $event.target.value;
    }

}