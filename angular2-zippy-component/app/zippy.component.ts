import {Component, Input} from '@angular/core'

@Component({
    selector: 'zippy',
    template: `
             <div class="panel panel-default">
                <div class="panel-heading" (click)="toggle($event)">{{title}}
                <i class="glyphicon pull-right"
                
                [ngClass]="{    
                   'glyphicon-chevron-up': !isExpanded,
                   'glyphicon-chevron-down': isExpanded
                }"
                ></i>
                </div>
                <div class="panel-body" *ngIf="!isExpanded"> <ng-content></ng-content> </div>
            </div>
            `,
    styles: [`
            .panel-heading {
                
                cursor: pointer;
            }
                `]
})
export class ZippyComponent {

    @Input('title') title="This is the title";

    isExpanded = true;

    toggle($event) {
        this.isExpanded = !this.isExpanded;
        console.log("Gotta expand or contract");
    }

}