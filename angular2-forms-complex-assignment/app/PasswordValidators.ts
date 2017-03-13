import { FormControl, FormGroup } from '@angular/forms';

export class PasswordValidators {

    static minimumLength(control: FormControl) {
        if(control.value.length != 0 && control.value.length < 5 ){
            return { minimumLength: true};
        } else {
            return null;
        }
    }

    static checkNewPasswords(group: FormGroup ) {
        var newPassword = group.get("newPassword");
        var reEntNewPassword  = group.get("reEntNewPassword");

        if(reEntNewPassword.value.length > 0) {
            if(reEntNewPassword.value != newPassword.value) {
                return { passwordMisMatch: true};
            } else {
                return null;
            }
        }
    }

    changePassword(changePasswordForm) {
        console.log(changePasswordForm.value);
    }
}