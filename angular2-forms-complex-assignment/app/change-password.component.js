"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PasswordValidators_1 = require("./PasswordValidators");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(fb) {
        this.form = fb.group({
            oldPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])],
            newPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    PasswordValidators_1.PasswordValidators.minimumLength
                ])],
            reEntNewPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                ])]
        }, { validator: PasswordValidators_1.PasswordValidators.checkNewPasswords });
    }
    ChangePasswordComponent.prototype.changePassword = function () {
        console.log(this.form);
        if (this.form.controls.oldPassword.value != "Nikhil") {
            this.form.controls.oldPassword.setErrors({
                incorrectOldPassword: true
            });
        }
        if (this.form.valid) {
            alert("Password successfully changed");
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    core_1.Component({
        selector: 'change-password',
        templateUrl: 'app/change-password.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map