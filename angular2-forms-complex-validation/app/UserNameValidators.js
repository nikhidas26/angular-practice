"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserNameValidators = (function () {
    function UserNameValidators() {
    }
    // we need to return promise, promise is a result of an async operation
    // https://github.com/Microsoft/vscode/issues/21968
    UserNameValidators.shouldBeUnique = function (control) {
        //return new Promise();
    };
    UserNameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') > 0) {
            return { cannotContainSpace: true };
        }
        else {
            return null;
        }
    };
    return UserNameValidators;
}());
exports.UserNameValidators = UserNameValidators;
//# sourceMappingURL=UserNameValidators.js.map