"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidators = (function () {
    function PasswordValidators() {
    }
    PasswordValidators.minimumLength = function (control) {
        if (control.value.length != 0 && control.value.length < 5) {
            return { minimumLength: true };
        }
        else {
            return null;
        }
    };
    PasswordValidators.checkNewPasswords = function (group) {
        var newPassword = group.get("newPassword");
        var reEntNewPassword = group.get("reEntNewPassword");
        if (reEntNewPassword.value.length > 0) {
            if (reEntNewPassword.value != newPassword.value) {
                return { passwordMisMatch: true };
            }
            else {
                return null;
            }
        }
    };
    PasswordValidators.prototype.changePassword = function (changePasswordForm) {
        console.log(changePasswordForm.value);
    };
    return PasswordValidators;
}());
exports.PasswordValidators = PasswordValidators;
//# sourceMappingURL=PasswordValidators.js.map