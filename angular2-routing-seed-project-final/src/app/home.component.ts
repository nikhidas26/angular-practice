import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `
    
    <h1> Home Page </h1>

    <ul>
        <li *ngFor="let archive of archives">
            <a [routerLink]="['archives', archive.year, archive.month]"> 
            {{archive.year}}/{{archive.month}} 
            </a>
        </li>
        <li>
            <a routerLink="test">
            Test
            </a>
        </li>
    </ul>

    `
})
export class HomeComponent {

    archives = [
        {year: 2016, month: 1},
        {year: 2016, month: 2},
        {year: 2016, month: 3}
    ];

}