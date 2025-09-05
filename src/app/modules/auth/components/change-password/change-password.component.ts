import { Component, inject, signal } from '@angular/core';
import { SpinnerLoaderComponent } from '../../../../shared/components/spinner-loader/spinner-loader.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../../utils/form-utils';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Notiflix, { Notify } from 'notiflix';
import { ChangePassword } from '../../../../interfaces/changePassword.interface';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  formUtils = FormUtils;
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  errorResponse = signal('');
  passwordForm = this.fb.group(
    {
      currentPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    {
      validators: [
        this.formUtils.isFieldOneEqualsFieldTwo(
          'newPassword',
          'confirmPassword'
        ),
      ],
    }
  );
  showPasswordActual = signal(false);
  showPassword = signal(false);
  showPasswordRepeat = signal(false);

  togglePasswordActual() {
    this.showPasswordActual.set(!this.showPasswordActual());
  }

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }

  togglePasswordRepeat() {
    this.showPasswordRepeat.set(!this.showPasswordRepeat());
  }

  onSubmit() {
    if (this.passwordForm.invalid) return;

    const changePasswordValue: ChangePassword = this.passwordForm.value;
    changePasswordValue.email = this.authService.user()?.email!;
    console.log(this.authService.user()?.email)

    this.authService.changePassword(changePasswordValue)
    .subscribe({
      next: (data:any) => {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
        Notify.success(data.message);
      },
      error: (error) => {
        console.log(error)
        Notify.failure(error.error.message);
      }
    });
  }
}
