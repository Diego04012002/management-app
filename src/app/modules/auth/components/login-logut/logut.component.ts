import { Component, inject, input } from '@angular/core';
import { User } from '../../../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-logut',
  imports: [],
  templateUrl: './logut.component.html',
})
export class LoginLogutComponent {
  user = input.required<User>()
  authService = inject(AuthService)
  router=inject(Router)

  changePassword(){
    this.router.navigateByUrl("/auth/change-password")
  }


  logout(){
    this.authService.logout()
    this.router.navigateByUrl("/welcome")
  }
}
