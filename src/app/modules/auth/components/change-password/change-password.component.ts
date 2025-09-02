import { Component, signal } from '@angular/core';
import { SpinnerLoaderComponent } from "../../../../shared/components/spinner-loader/spinner-loader.component";

@Component({
  selector: 'app-change-password',
  imports: [SpinnerLoaderComponent],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {

  showPasswordActual=signal(false)
  showPassword=signal(false)
  showPasswordRepeat=signal(false)

  togglePasswordActual() {
    this.showPasswordActual.set(!this.showPasswordActual())
  }


  togglePassword() {
    this.showPassword.set(!this.showPassword())
  }

  togglePasswordRepeat() {
    this.showPasswordRepeat.set(!this.showPasswordRepeat())
  }

}
