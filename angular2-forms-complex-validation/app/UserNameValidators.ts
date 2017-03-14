import { FormControl } from '@angular/forms'

export class UserNameValidators {

// we need to return promise, promise is a result of an async operation
// https://github.com/Microsoft/vscode/issues/21968
    static shouldBeUnique(control: FormControl) {
        
       //return new Promise();
    }

    static cannotContainSpace(control: FormControl) {
        if(control.value.indexOf(' ') > 0) {
            return { cannotContainSpace: true };
        } else {
            return null;
        }
    }
}