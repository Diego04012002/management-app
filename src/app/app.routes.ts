import { Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { InvitationManagementComponent } from './pages/invitation-management/invitation-management.component';
import { CheckInSystemComponent } from './pages/checkin-system/checkin-system.component';
import { AccessRecordsComponent } from './pages/access-records/access-records.component';
import { MainPageComponent } from './pages/main-management-page/main-management-page.component';
import { IsAuthenticatedGuard } from './modules/auth/guards/isAuthenticated.guard';
import { IsAdminGuard } from './modules/auth/guards/isAdmin.guard';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

export const routes: Routes = [
  {
    path:"welcome",
    component:WelcomePageComponent,
  },
  {
    path: 'main',
    component: MainPageComponent,
    children: [
      {
        path: 'perfil',
        component: UserProfileComponent,
        canMatch:[IsAuthenticatedGuard]
      },
      {
        path: 'empleados',
        loadChildren: () =>
          import('./pages/employee-management/employee.routes'),
        canMatch:[IsAuthenticatedGuard, IsAdminGuard]
      },
      {
        path: 'eventos',
        loadChildren: () => import('./pages/event-management/events.routes'),
        canMatch:[IsAuthenticatedGuard, IsAdminGuard]
      },
      {
        path: 'invitaciones',
        component: InvitationManagementComponent,
        canMatch:[IsAuthenticatedGuard, IsAdminGuard]
      },
      {
        path: 'checkinout',
        component: CheckInSystemComponent,
        canMatch:[IsAuthenticatedGuard, IsAdminGuard]
      },
      {
        path: 'registros',
        component: AccessRecordsComponent,
        canMatch:[IsAuthenticatedGuard, IsAdminGuard]
      },
      {
        path: '**',
        redirectTo: 'perfil',
      }
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-page/auth.routes'),
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
