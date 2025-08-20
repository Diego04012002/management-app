import { Routes } from '@angular/router';
import { EmployeeLayoutComponent } from '../../layouts/employee-layout/employee-layout.component';
import { EmployeeCreateComponent } from '../../components/employee-management/components/employee-create/employee-create.component';
import { EmployeeListComponent } from '../../components/employee-management/components/employee-list/employee-list.component';
import { EventosLayoutComponent } from '../../layouts/eventos-layout/eventos-layout.component';
import { EventsCreateComponent } from '../../components/event-management/components/events-create/events-create.component';
import { EventsListComponent } from '../../components/event-management/components/events-list/events-list.component';

export const eventsRoute: Routes = [
  {
    path: '',
    component:EventosLayoutComponent,
    children: [
      {
        path: 'create',
        component: EventsCreateComponent,
      },
      {
        path: 'list',
        component: EventsListComponent,
      },
      {
        path: '**',
        redirectTo: 'create',
      },
    ],
  },
];

export default eventsRoute;
