import { ChangePasswordValidators } from './changePassword.validators';
import { FormBuilder, Validators } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPassword: ['', Validators.required, ChangePasswordValidators.checkOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
      validator: ChangePasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
