import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    template: `
                <div class="nik-large">
                <i class="glyphicon glyphicon-heart" [class.highlighted]="iLike" (click)="onHeartClick($event)">
                </i>
                {{ noOfLikes }}
                </div>

                `
                ,
    styles: [`
            .glyphicon-heart {
                color: #ccc;
                cursor: pointer;
            }
            .nik-large {
                font-size: 50px;
            }
            .highlighted {
                color: deeppink;
            }
            `]
})
export class LikeComponent {

    @Input() iLike = false;
    @Input() noOfLikes = 0;

    onHeartClick($event){
        this.iLike = !this.iLike;
        if(this.iLike) {
            this.noOfLikes++;
        } else {
            this.noOfLikes--;
        }
    }

}