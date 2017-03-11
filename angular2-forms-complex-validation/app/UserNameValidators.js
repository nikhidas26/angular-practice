"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserNameValidators = (function () {
    function UserNameValidators() {
    }
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