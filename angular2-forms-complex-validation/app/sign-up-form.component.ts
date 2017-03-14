import { Component } from "@angular/core"
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UserNameValidators } from './UserNameValidators'

@Component({
    selector: "sign-up",
    templateUrl: 'app/sign-up-form.component.html'
})
export class SignUpFormComponent {

    // form = new FormGroup({
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)
    // });

    // signup() {
    //     console.log(this.form.value);
    // }

    form: FormGroup;

    constructor (fb: FormBuilder) {    
       this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UserNameValidators.cannotContainSpace
            ])],
            password: ['', Validators.required]
        })
    }


    signup($event) {
        //$event.preventDefault();
        this.form.controls.username.setErrors({
            invalidLogin: true
        });

        console.log(this.form.value);
    }



}