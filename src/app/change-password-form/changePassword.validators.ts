import { ValidationErrors, AbstractControl } from '@angular/forms';

export class ChangePasswordValidators {

    static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if(control.value != 'niyas123') {
                resolve({checkOldPassword: true})
            }
            else{
                resolve(null);
            }
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if(newPassword.value != confirmPassword.value) {
            return {passwordsShouldMatch: true}
        }
        return null;
    }
}