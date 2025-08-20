import { Component } from '@angular/core';
import { EventsCreateComponent } from '../../components/event-management/components/events-create/events-create.component';
import { EventsListComponent } from '../../components/event-management/components/events-list/events-list.component';
import { TabsComponent } from '../../shared/components/tabs/tabs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  imports: [TabsComponent, RouterOutlet],
})
export class EventManagementComponent {
  tabs = [
    {
      path: 'eventos/create',
      label: 'Crear Evento',
      class: 'bg-gradient-to-r from-blue-600 to-cyan-600',
      image: 'employee.svg',
    },
    {
      path: 'eventos/list',
      label: 'Lista de Eventos',
      class: 'bg-gradient-to-r from-purple-600 to-pink-600',
      image: 'employee.svg',
    },
  ];
}
