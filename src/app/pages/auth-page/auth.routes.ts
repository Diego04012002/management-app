import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../../modules/auth/components/login/login.component';
import { ChangePasswordComponent } from '../../modules/auth/components/change-password/change-password.component';

export const authRoute: Routes = [
  {
    path: '',
    component:AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

export default authRoute;
