import { FormControl } from '@angular/forms'

export class UserNameValidators {

    static cannotContainSpace(control: FormControl) {
        if(control.value.indexOf(' ') > 0) {
            return { cannotContainSpace: true };
        } else {
            return null;
        }
    }
}