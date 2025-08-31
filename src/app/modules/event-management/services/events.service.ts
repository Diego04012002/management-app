import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../../../interfaces/event.interface';

@Injectable({ providedIn: 'root' })
export class EventsService {
  eventsSubject = new BehaviorSubject<Event[]>([]);
  eventsExamples: Event[] = [
    {
      name: 'Reunión de Proyecto Q1',
      date: '2025-08-01',
      description: 'Revisión de objetivos del primer trimestre',
      location: 'Sala de Conferencias A',
      invitations: 5,
    },
    {
      name: 'Capacitación Empresarial',
      date: '2025-08-02',
      description: 'Workshop sobre nuevas tecnologías',
      location: 'Auditorio Principal',
      invitations: 12,
    },
    {
      name: 'Presentación Anual',
      date: new Date('2025-08-03').toISOString().split('T')[0],
      description: 'Presentación de resultados anuales',
      location: 'Sala de Juntas',
      invitations: 8,
    },


  ];
  constructor() {
    this.setEvents = this.eventsExamples;
  }

  get events() {
    return this.eventsSubject.asObservable();
  }

  set setEvents(events: Event[]) {
    this.eventsSubject.next(events);
  }
}
