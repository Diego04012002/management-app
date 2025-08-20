import { Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { EventManagementComponent } from './pages/event-management/event-management.component';
import { InvitationManagementComponent } from './pages/invitation-management/invitation-management.component';
import { CheckInSystemComponent } from './pages/checkin-system/checkin-system.component';
import { AccessRecordsComponent } from './pages/access-records/access-records.component';

export const routes: Routes = [
  {
    path:"perfil",
    component:UserProfileComponent
  },
  {
    path:"empleados",
    loadChildren:() => import("./pages/employee-management/employee.routes")
  },
  {
    path:"eventos",
    loadChildren:() => import("./pages/event-management/events.routes")
  },
  {
    path:"invitaciones",
    component:InvitationManagementComponent
  },
  {
    path:"checkinout",
    component:CheckInSystemComponent
  },
  {
    path:"registros",
    component:AccessRecordsComponent
  },
  {
    path:"**",
    redirectTo:"perfil"
  }
];
