import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'archives',
    template: `
        <h1>Archives</h1>
        {{year}}/{{month}}
    `
})
export class ArchivesComponent implements OnInit, OnDestroy {
    
    year;
    month;
    subscription; 

    constructor(private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.subscription = this._activatedRoute.params.subscribe(params => {
            this.year = params["year"];
            this.month = params["month"]
        });
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}