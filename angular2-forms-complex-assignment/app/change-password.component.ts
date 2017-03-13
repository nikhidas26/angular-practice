import {Component} from '@angular/core'
import {FormControlName, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms'
import {PasswordValidators} from './PasswordValidators'

@Component( {
    selector: 'change-password',
    templateUrl: 'app/change-password.component.html'
})

export class ChangePasswordComponent {

    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            oldPassword: ['', Validators.compose([
                Validators.required
                ])],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.minimumLength
                ])],
            reEntNewPassword: ['', Validators.compose([
                Validators.required,
                
                ])]
        }, { validator: PasswordValidators.checkNewPasswords});
    }

    changePassword() {
        console.log(this.form);
        if(this.form.controls.oldPassword.value != "Nikhil") {
            this.form.controls.oldPassword.setErrors({
                incorrectOldPassword: true
            });
        }
        if(this.form.valid) {
            alert("Password successfully changed");
        }
    }
}
