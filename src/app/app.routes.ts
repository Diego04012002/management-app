import { Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';
import { InvitationManagementComponent } from './pages/invitation-management/invitation-management.component';
import { CheckInSystemComponent } from './pages/checkin-system/checkin-system.component';
import { AccessRecordsComponent } from './pages/access-records/access-records.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { IsAuthenticatedGuard } from './modules/auth/guards/isAuthenticated.guard';

export const routes: Routes = [
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
        canMatch:[IsAuthenticatedGuard]
      },
      {
        path: 'eventos',
        loadChildren: () => import('./pages/event-management/events.routes'),
        canMatch:[IsAuthenticatedGuard]
      },
      {
        path: 'invitaciones',
        component: InvitationManagementComponent,
        canMatch:[IsAuthenticatedGuard]
      },
      {
        path: 'checkinout',
        component: CheckInSystemComponent,
        canMatch:[IsAuthenticatedGuard]
      },
      {
        path: 'registros',
        component: AccessRecordsComponent,
        canMatch:[IsAuthenticatedGuard]
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
