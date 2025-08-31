import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../../modules/auth/components/login/login.component';

export const authRoute: Routes = [
  {
    path: '',
    component:AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      // {
      //   path: 'register',
      //   component: Reg,
      // },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];

export default authRoute;
