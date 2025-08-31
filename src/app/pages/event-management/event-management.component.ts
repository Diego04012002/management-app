import { Component } from '@angular/core';
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
      path: '/main/eventos/create',
      label: 'Crear Evento',
      class: 'bg-gradient-to-l from-purple-500 to-pink-500 text-white shadow-lg',
      image: '',
    },
    {
      path: '/main/eventos/list',
      label: 'Lista de Eventos',
      class: 'bg-gradient-to-r from-fuchsia-700 to-pink-400 text-white shadow-lg',
      image: '',
    },
    {
      path: '/main/eventos/calendar',
      label: 'Calendario de Eventos',
      class: 'bg-gradient-to-r from-fuchsia-700 to-pink-400 text-white shadow-lg',
      image: '',
    },
  ];
}
