import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  imports: [],
  templateUrl: './events-list.component.html',
})
export class EventsListComponent {
  events = [
    {
      name: 'Reunión de Proyecto Q1',
      date: '20/02/2024 14:00',
      description: 'Revisión de objetivos del primer trimestre',
      location: 'Sala de Conferencias A',
      invitations: 5,
    },
    {
      name: 'Capacitación Empresarial',
      date: '25/02/2024 10:00',
      description: 'Workshop sobre nuevas tecnologías',
      location: 'Auditorio Principal',
      invitations: 12,
    },
    {
      name: 'Presentación Anual',
      date: '15/03/2024 16:00',
      description: 'Presentación de resultados anuales',
      location: 'Sala de Juntas',
      invitations: 8,
    },
  ];
}
