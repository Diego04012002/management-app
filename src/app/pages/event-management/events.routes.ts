import { Routes } from '@angular/router';
import { EmployeeLayoutComponent } from '../../layouts/employee-layout/employee-layout.component';
import { EventosLayoutComponent } from '../../layouts/eventos-layout/eventos-layout.component';
import { EventsCreateComponent } from '../../modules/event-management/components/events-create/events-create.component';
import { EventsListComponent } from '../../modules/event-management/components/events-list/events-list.component';
import { EventCalendarComponent } from '../../modules/event-management/components/event-calendar/event-calendar.component';


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
        path: 'calendar',
        component: EventCalendarComponent,
      },
      {
        path: '**',
        redirectTo: 'create',
      },
    ],
  },
];

export default eventsRoute;
