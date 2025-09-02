import { AfterViewInit, Component, inject, signal } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { login } from '../../../../interfaces/login.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements AfterViewInit{
  authService=inject(AuthService)
  router = inject(Router);
  fb = inject(FormBuilder);
  showPassword=signal(false)
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngAfterViewInit(): void {
    if(this.authService.user()){
      this.router.navigateByUrl('/main/perfil')
    }
  }

  togglePassword() {
    this.showPassword.set(!this.showPassword())
  }

  onSubmit() {
    const user:login = {
      email: this.loginForm.value.email ?? "",
      password: this.loginForm.value.password ?? ""
    }
    this.authService.login(user).subscribe(res => {
      if(res){
        this.router.navigateByUrl('/perfil')
      }
    })
  }
}
