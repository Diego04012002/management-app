import { Component } from '@angular/core';
import { LoginComponent } from "../../modules/auth/components/login/login.component";
import { RouterOutlet } from '@angular/router';
import { AuthPageComponent } from "../../pages/auth-page/auth-page.component";

@Component({
  selector: 'app-auth-layout',
  imports: [AuthPageComponent],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent { }
