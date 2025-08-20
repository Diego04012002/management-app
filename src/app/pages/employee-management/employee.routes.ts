import { Routes } from '@angular/router';
import { EmployeeLayoutComponent } from '../../layouts/employee-layout/employee-layout.component';
import { EmployeeCreateComponent } from '../../components/employee-management/components/employee-create/employee-create.component';
import { EmployeeListComponent } from '../../components/employee-management/components/employee-list/employee-list.component';

export const employeeRoute: Routes = [
  {
    path: '',
    component:EmployeeLayoutComponent,
    children: [
      {
        path: 'create',
        component: EmployeeCreateComponent,
      },
      {
        path: 'list',
        component: EmployeeListComponent,
      },
      {
        path: '**',
        redirectTo: 'create',
      },
    ],
  },
];

export default employeeRoute;
